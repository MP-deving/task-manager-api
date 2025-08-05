/**
 * Interface que define a estrutura de uma Task
 * 
 * Em TypeScript, interfaces são contratos que definem a forma que um objeto deve ter.
 * Elas não existem em runtime, apenas durante o desenvolvimento para verificação de tipos.
 */
export interface Task {
  // Identificador único da task
  // 'string' é usado para UUIDs, que são mais seguros que números sequenciais
  id: string;
  
  // Título da task - obrigatório e não pode ser vazio
  title: string;
  
  // Descrição da task - opcional (pode ser undefined)
  description?: string;
  
  // Status da task - usando union type para limitar valores possíveis
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  
  // Data de criação - usando Date para trabalhar com timestamps
  createdAt: Date;
  
  // Data de atualização - pode ser undefined se nunca foi editada
  updatedAt?: Date;
  
  // Prioridade da task - opcional com valores predefinidos
  priority?: 'low' | 'medium' | 'high';
  
  // Data limite para conclusão - opcional
  dueDate?: Date;
}

/**
 * Type para criar uma nova task (sem id, createdAt, updatedAt)
 * 
 * Omit<T, K> é um utility type que remove propriedades específicas de um tipo
 * Isso é útil para operações de criação onde alguns campos são gerados automaticamente
 */
export type CreateTaskInput = Omit<Task, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Type para atualizar uma task (todas as propriedades opcionais exceto id)
 * 
 * Partial<T> torna todas as propriedades opcionais
 * Intersection (&) combina tipos
 */
export type UpdateTaskInput = Partial<Omit<Task, 'id' | 'createdAt'>> & { id: string };

/**
 * Enum para status das tasks
 * 
 * Enums em TypeScript criam um conjunto de constantes nomeadas
 * São úteis para valores que não mudam e precisam ser referenciados em vários lugares
 */
export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

/**
 * Enum para prioridades
 */
export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
} 