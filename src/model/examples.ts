import type { Task, CreateTask, UpdateTask, UpdateTaskInput } from './Task';

import { TaskStatus, TaskPriority } from './Task';

// Exemplo 1: Criando uma task completa
const taskExample: Task = {
  id: '123e4567-e89b-12d3-a456-426614174000',
  title: 'Aprender TypeScript',
  description: 'Estudar interfaces, tipos e generics',
  status: TaskStatus.PENDING,
  priority: TaskPriority.HIGH,
  createdAt: new Date(),
  dueDate: new Date('2024-12-31'),
};

const exampleTasks1: Task = {
  id: '123e4567-e89b-12d3-a456-426614174000',
  title: 'Aprender TypeScript',
  description: 'Estudar interfaces, tipos e generics',
  status: TaskStatus.IN_PROGRESS,
  priority: TaskPriority.MEDIUM,
  createdAt: new Date(),
  dueDate: new Date('2025-09-01'),
};

const newTaskData: CreateTask = {
  title: 'Implementar CRUD de tasks',
  description: 'Criar endpoints para gerenciar tasks',
  status: TaskStatus.IN_PROGRESS,
  priority: TaskPriority.MEDIUM,
  dueDate: new Date('2024-12-15'),
};

const updateTaskData: UpdateTaskInput = {
  id: '123e4567-e89b-12d3-a456-426614174000',
  status: TaskStatus.COMPLETED,
  updatedAt: new Date(),
};

function createTask(taskData: CreateTask): Task {
  return {
    id: generateId(),
    ...taskData,
    createdAt: new Date(),
    createdBy: 'MP-Deving',
  };
}

function isValidStatus(status: string): status is TaskStatus {
  return Object.values(TaskStatus).includes(status as TaskStatus);
}

function generateId(): string {
  return 'id-' + Date.now();
}

const tasks: Task[] = [
  {
    id: '1',
    title: 'Task 1',
    status: TaskStatus.PENDING,
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'Task 2',
    status: TaskStatus.COMPLETED,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

function getStatusColor(status: TaskStatus): string {
  switch (status) {
    case TaskStatus.PENDING:
      return 'yellow';
    case TaskStatus.IN_PROGRESS:
      return 'blue';
    case TaskStatus.COMPLETED:
      return 'green';
    case TaskStatus.CANCELLED:
      return 'red';
    default:
      return 'gray';
  }
}

export {
  taskExample,
  newTaskData,
  updateTaskData,
  createTask,
  isValidStatus,
  tasks,
  getStatusColor,
};
