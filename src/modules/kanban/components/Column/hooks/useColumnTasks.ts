import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { MAX_TASK_PER_COLUMN } from '../config';
import { ColumnType } from '../types';

import { useTaskCollection } from '../../Task/hooks/useTaskCollection';
import { TaskModel } from '../../Task/types';

export function useColumnTasks(column: ColumnType) {
  const [tasks, setTasks] = useTaskCollection();

  const addEmptyTask = useCallback(() => {
    setTasks((allTasks) => {
      const columnTasks = allTasks[column];

      if (columnTasks.length > MAX_TASK_PER_COLUMN) {
        return allTasks;
      }

      const newColumnTask: TaskModel = {
        id: uuidv4(),
        title: `Nova Tarefa ${column}`,
        column,
      };

      return {
        ...allTasks,
        [column]: [newColumnTask, ...columnTasks],
      };
    });
  }, [column, setTasks]);

  return {
    tasks: tasks[column],
    addEmptyTask,
  };
}
