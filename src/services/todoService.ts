// src/services/todoService.ts
'use server';

import prisma from '@/lib/prisma';
import type { Todo as TodoType } from '@prisma/client';

export type Todo = TodoType;

/**
 * Fetches all todos from the database.
 * @returns A promise that resolves to an array of todos.
 */
export async function getTodos(): Promise<Todo[]> {
  // Simulate a database delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const todos = await prisma.todo.findMany();
  return todos;
}

/**
 * Adds a new todo to the database.
 * @param text The content of the new todo.
 * @returns The newly created todo.
 */
export async function addTodo(text: string): Promise<Todo> {
    const newTodo = await prisma.todo.create({
        data: {
            text,
            completed: false,
        },
    });
    return newTodo;
}
