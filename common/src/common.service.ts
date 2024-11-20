import { Injectable } from '@nestjs/common';

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

@Injectable()
export class CommonService {
  private todos: Todo[] = [];
  private nextId = 1;

  constructor() {}

  // Get all todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Get a single todo by id
  getTodoById(id: number): Todo | null {
    return this.todos.find((todo) => todo.id === id) || null;
  }

  // Add a new todo
  createTodo(title: string, description: string): Todo {
    const newTodo: Todo = {
      id: this.nextId++,
      title,
      description,
      completed: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  // Update a todo by id
  updateTodo(id: number, updates: Partial<Omit<Todo, 'id'>>): Todo | null {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      return null;
    }
    const updatedTodo = {
      ...this.todos[todoIndex],
      ...updates,
    };
    this.todos[todoIndex] = updatedTodo;
    return updatedTodo;
  }

  // Delete a todo by id
  deleteTodoById(id: number): boolean {
    const initialLength = this.todos.length;
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return this.todos.length < initialLength;
  }
}
