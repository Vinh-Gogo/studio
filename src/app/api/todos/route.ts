// src/app/api/todos/route.ts
import { NextResponse } from 'next/server';
import { getTodos } from '@/services/todoService';

/**
 * Handles GET requests to /api/todos.
 * Fetches and returns all todos.
 */
export async function GET() {
  try {
    const todos = await getTodos();
    return NextResponse.json(todos);
  } catch (error) {
    console.error('Failed to fetch todos:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
