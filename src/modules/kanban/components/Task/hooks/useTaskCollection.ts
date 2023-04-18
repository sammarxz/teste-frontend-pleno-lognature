import { useLocalStorage } from 'usehooks-ts';

import { ColumnType } from '../../Column/types';
import { TaskModel } from '../types';

import { initialTasks } from '../data/initialTasks';

export function useTaskCollection(isTestMode = false) {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>('tasks', initialTasks(isTestMode));
}
