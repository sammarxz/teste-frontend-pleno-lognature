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
        column: ColumnType.IN_PROGRESS,
        title: 'Adicionar CRUD de projetos',
      },
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: 'Testes Unitários',
      },
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: 'Criar container Docker',
      },
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: 'Adicionar Filtragem de tarefas ',
      },
    ],
    'Em Andamento': [
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: 'Comemorar 🥳🎉',
      },
    ],
    Concluída: [
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: 'Design da aplicação',
      },
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: 'Criar estrutura',
      },
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: 'Criar Layout Estático',
      },
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: 'Adicionar Funcionalidades',
      },
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: 'Enviar Teste',
      },
    ],
  });
}
