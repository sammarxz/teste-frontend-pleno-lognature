import { useRef } from 'react';
import { XYCoord, useDrag, useDrop } from 'react-dnd';

import { ItemType } from '../../Column/types';
import { DragItem, TaskModel } from '../types';

export function useTaskDragAndDrop<T extends HTMLElement>({
  task,
  index,
  handleDropHover,
}: {
  task: TaskModel;
  index: number;
  handleDropHover: (i: number, j: number) => void;
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

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [_, drop] = useDrop<DragItem, void, unknown>({
    accept: ItemType.TASK,
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }

      const draggedItemIndex = item.index;
      const hoveredItemIndex = index;

      if (draggedItemIndex === hoveredItemIndex) {
        return;
      }

      const isDraggedItemAboveHovered = draggedItemIndex < hoveredItemIndex;
      const isDraggedItemBelowHovered = !isDraggedItemAboveHovered;

      const { x: mouseX, y: mouseY } = monitor.getClientOffset() as XYCoord;

      const hoveredBoundingRect = ref.current.getBoundingClientRect();

      const hoveredMiddleHeight =
        (hoveredBoundingRect.bottom - hoveredBoundingRect.top) / 2;

      const mouseYRelativeToHovered = mouseY - hoveredBoundingRect.top;
      const isMouseYAboveHoveredMiddleHeight =
        mouseYRelativeToHovered < hoveredMiddleHeight;
      const isMouseYBelowHoveredMiddleHeight =
        mouseYRelativeToHovered > hoveredMiddleHeight;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging dowards, only mode when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      if (isDraggedItemAboveHovered && isMouseYAboveHoveredMiddleHeight) {
        return;
      }

      if (isDraggedItemBelowHovered && isMouseYBelowHoveredMiddleHeight) {
        return;
      }

      // perform the action
      handleDropHover(draggedItemIndex, hoveredItemIndex);

      // eslint-disable-next-line no-param-reassign
      item.index = hoveredItemIndex;
    },
  });

  drag(drop(ref));

  return {
    ref,
    isDragging,
  };
}
