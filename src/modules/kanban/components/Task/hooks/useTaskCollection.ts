import { useLocalStorage } from 'usehooks-ts';
import { v4 as uuidv4 } from 'uuid';

import { ColumnType } from '../../Column/types';
import { TaskModel } from '../types';

export function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>('tasks', {
    Pendente: [
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: 'Adicionar CRUD de projetos',
      },
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: 'Testes Unitários nos `Custom Hooks`',
      },
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: 'Criar container Docker para desenvolvimento',
      },
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: 'Adicionar Buscapor tarefas',
      },
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: 'Comemorar!',
      },
    ],
    'Em Andamento': [
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: `
Adicionar animações

- [ ] Animação de Hover
- [ ] Animar Tarefas com Framer-motion            
`,
      },
    ],
    Completa: [
      {
        id: uuidv4(),
        column: ColumnType.COMPLETED,
        title: 'Design da aplicação',
      },
      {
        id: uuidv4(),
        column: ColumnType.COMPLETED,
        title: 'Criar estrutura',
      },
      {
        id: uuidv4(),
        column: ColumnType.COMPLETED,
        title: 'Criar Layout Estático',
      },
      {
        id: uuidv4(),
        column: ColumnType.COMPLETED,
        title: 'Adicionar Funcionalidades',
      },
      {
        id: uuidv4(),
        column: ColumnType.COMPLETED,
        title: 'Enviar Teste',
      },
    ],
  });
}
