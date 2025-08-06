/**
 * Arquivo de teste para verificar se os tipos estão funcionando
 * Execute: npx tsc --noEmit src/model/test-types.ts
 */

import { generateId } from './examples';

import {
  TaskPriority,
  type Task,
  type CreateTask,
  type UpdateTask,
  TaskStatus,
} from './Task';

// ✅ Teste 1: Criando uma task válida
const validTask: Task = {
  id: '1',
  title: 'Teste',
  status: TaskStatus.PENDING,
  createdAt: new Date(),
};

const firstTaskCreated: Task = {
  id: generateId(),
  title: 'First task created',
  status: TaskStatus.IN_PROGRESS,
  createdAt: new Date(),
};

const validCreateInput: CreateTask = {
  title: 'Nova Task',
  status: TaskStatus.IN_PROGRESS,
  priority: TaskPriority.LOW,
};

const validUpdateInput: UpdateTask = {
  id: '1',
  status: TaskStatus.COMPLETED,
};

console.log('✅ Todos os tipos estão funcionando corretamente!');
console.log('Valid Task:', validTask);
console.log('Valid Create Input:', validCreateInput);
console.log('Valid Update Input:', validUpdateInput);
