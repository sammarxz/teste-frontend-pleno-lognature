import { useRef } from 'react';
import { useDrag } from 'react-dnd';

import { ItemType } from '../../Column/types';
import { DragItem, TaskModel } from '../types';

export function useTaskDragAndDrop<T extends HTMLElement>({
  task,
  index,
}: {
  task: TaskModel;
  index: number;
}) {
  const ref = useRef<T>(null);

  const [{ isDragging }, drag] = useDrag<
    DragItem,
    void,
    { isDragging: boolean }
  >({
    type: ItemType.TASK,
    item: {
      from: task.column,
      id: task.id,
      index,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(ref);

  return {
    ref,
    isDragging,
  };
}
