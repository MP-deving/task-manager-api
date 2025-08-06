export interface Task {
  id?: string;
  title?: string;
  description?: string;
  status?: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  priority?: 'low' | 'medium' | 'high';
  dueDate?: Date;
}

export type CreateTask = Omit<
  Task,
  'id' | 'createdAt' | 'createdBy' | 'updatedAt' | 'updatedAt'
>;

export type UpdateTask = Partial<
  Omit<Task, 'id' | 'createdAt' | 'createdBy' | 'updatedAt' | 'updatedAt'>
> & { id: string };

export type UpdateTaskInput = Partial<Omit<Task, 'id'>> & { id: string };

export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}
