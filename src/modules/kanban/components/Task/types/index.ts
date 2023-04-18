import { ColumnType } from '../../Column/types';

export interface TaskModel {
  id: string;
  title: string;
  column: ColumnType;
}
