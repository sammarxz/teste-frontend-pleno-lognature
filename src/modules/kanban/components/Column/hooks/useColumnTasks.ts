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

  const updateTask = useCallback(
    (id: TaskModel['id'], updatedTask: Omit<Partial<TaskModel>, 'id'>) => {
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];

        return {
          ...allTasks,
          [column]: columnTasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task
          ),
        };
      });
    },
    [column, setTasks]
  );

  const deleteTask = useCallback(
    (id: TaskModel['id']) => {
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];

        return {
          ...allTasks,
          [column]: columnTasks.filter((task) => task.id !== id),
        };
      });
    },
    [column, setTasks]
  );

  return {
    tasks: tasks[column],
    addEmptyTask,
    updateTask,
    deleteTask,
  };
}
