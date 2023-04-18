import { v4 as uuidv4 } from 'uuid';

import { ColumnType } from '../../Column/types';

export function initialTasks(isTestMode: boolean) {
  return {
    Pendente: [
      {
        id: isTestMode ? '1' : uuidv4(),
        column: ColumnType.TO_DO,
        title: 'Adicionar CRUD de projetos',
      },
      {
        id: isTestMode ? '2' : uuidv4(),
        column: ColumnType.TO_DO,
        title: 'Testes Unitários nos `Custom Hooks`',
      },
      {
        id: isTestMode ? '3' : uuidv4(),
        column: ColumnType.TO_DO,
        title: 'Criar container Docker para desenvolvimento',
      },
      {
        id: isTestMode ? '4' : uuidv4(),
        column: ColumnType.TO_DO,
        title: 'Adicionar Busca por tarefas',
      },
      {
        id: isTestMode ? '5' : uuidv4(),
        column: ColumnType.TO_DO,
        title: 'Comemorar!',
      },
    ],
    'Em Andamento': [
      {
        id: isTestMode ? '6' : uuidv4(),
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
        id: isTestMode ? '7' : uuidv4(),
        column: ColumnType.COMPLETED,
        title: 'Design da aplicação',
      },
      {
        id: isTestMode ? '8' : uuidv4(),
        column: ColumnType.COMPLETED,
        title: 'Criar estrutura',
      },
      {
        id: isTestMode ? '9' : uuidv4(),
        column: ColumnType.COMPLETED,
        title: 'Criar Layout Estático',
      },
      {
        id: isTestMode ? '10' : uuidv4(),
        column: ColumnType.COMPLETED,
        title: 'Adicionar Funcionalidades',
      },
      {
        id: isTestMode ? '11' : uuidv4(),
        column: ColumnType.COMPLETED,
        title: 'Enviar Teste',
      },
    ],
  };
}
