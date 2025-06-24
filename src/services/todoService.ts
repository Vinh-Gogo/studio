// src/services/todoService.ts
'use server';

// In a real application, this would connect to a database (e.g., PostgreSQL, MongoDB, Firebase Firestore).
// For this example, we'll use a simple in-memory array.

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const todos: Todo[] = [
  { id: 1, text: 'Learn Next.js Backend Features', completed: true },
  { id: 2, text: 'Create a Service Layer', completed: true },
  { id: 3, text: 'Build an API Route', completed: false },
];

/**
 * Fetches all todos.
 * @returns A promise that resolves to an array of todos.
 */
export async function getTodos(): Promise<Todo[]> {
  // Simulate a database delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return todos;
}

/**
 * Adds a new todo.
 * In a real app, this would insert a new record into the database.
 * @param text The content of the new todo.
 * @returns The newly created todo.
 */
export async function addTodo(text: string): Promise<Todo> {
    const newTodo: Todo = {
        id: todos.length + 1,
        text,
        completed: false,
    };
    todos.push(newTodo);
    return newTodo;
}
