import { ColumnType } from '@/modules/kanban/components/Columns/types/enums';

export interface TaskModel {
  id: string;
  title: string;
  column: ColumnType;
}
