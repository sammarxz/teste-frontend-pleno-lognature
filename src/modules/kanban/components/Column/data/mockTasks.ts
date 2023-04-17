import { TaskModel } from '../../Task/types';
import { ColumnType } from '../types/enums';

export const mockTasks: TaskModel[] = [
  {
    id: '1',
    title: 'Task 1',
    column: ColumnType.TO_DO,
  },
  {
    id: '2',
    title: 'Task 2',
    column: ColumnType.TO_DO,
  },
  {
    id: '3',
    title: 'Task 3',
    column: ColumnType.TO_DO,
  },
];
