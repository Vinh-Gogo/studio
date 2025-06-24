// src/app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';
import { Role } from '@prisma/client';

interface AuthPayload {
  userId: string;
  email: string;
  role: Role;
  iat: number;
  exp: number;
}


// GET all published posts
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: {
          select: {
            email: true,
            id: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// POST a new post (Admin only)
export async function POST(req: NextRequest) {
  try {
    // 1. Authenticate and Authorize
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Authorization header missing or invalid' }, { status: 401 });
    }
    const token = authHeader.split(' ')[1];

    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined in the environment variables.');
    }

    let decoded: AuthPayload;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET) as AuthPayload;
    } catch (e) {
      return NextResponse.json({ message: 'Invalid or expired token' }, { status: 401 });
    }
    
    // 2. Check Role
    if (decoded.role !== 'ADMIN') {
      return NextResponse.json({ message: 'Forbidden: You do not have permission to perform this action' }, { status: 403 });
    }

    // 3. Create Post
    const { title, content, published } = await req.json();

    if (!title) {
      return NextResponse.json({ message: 'Title is required' }, { status: 400 });
    }

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        published,
        authorId: decoded.userId,
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Failed to create post:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
