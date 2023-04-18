import { Box, IconButton } from '@chakra-ui/react';
import _ from 'lodash';
import { useState, memo } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

import { AutoResizeTextarea, MarkdownView } from './components';
import { useTaskDragAndDrop } from './hooks/useTaskDragAndDrop';
import { TaskModel } from './types';

type TaskProps = {
  index: number;
  task: TaskModel;
  onUpdate: (id: TaskModel['id'], updatedTask: TaskModel) => void;
  onDelete: (id: TaskModel['id']) => void;
  onDropHover: (i: number, j: number) => void;
};

export function Task({
  index,
  task,
  onUpdate: handleUpdate,
  onDelete: handleDelete,
  onDropHover: handleDropHover,
}: TaskProps) {
  const [showEditor, setShowEditor] = useState(false);
  const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>(
    { task, index },
    handleDropHover
  );

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;
    handleUpdate(task.id, { ...task, title: newTitle });
  };

  const handleDeleteClick = () => {
    handleDelete(task.id);
  };

  return (
    <Box
      ref={ref}
      role="group"
      position="relative"
      rounded="lg"
      w="full"
      py={3}
      pl={6}
      pr={12}
      bg="gray.800"
      border="1px"
      borderColor="gray.700"
      cursor="grab"
      flexGrow={0}
      flexShrink={0}
      opacity={isDragging ? 0.5 : 1}
    >
      <IconButton
        variant="unstyled"
        position="absolute"
        top={1}
        right={0}
        zIndex={100}
        aria-label="deletar tarefa"
        color="gray.500"
        icon={<RiDeleteBinLine />}
        opacity={0}
        _groupHover={{
          opacity: 1,
        }}
        onClick={handleDeleteClick}
      />
      {showEditor ? (
        <AutoResizeTextarea
          value={task.title}
          variant="unstyled"
          cursor="inherit"
          resize="none"
          maxH={200}
          focusBorderColor="none"
          onChange={handleTitleChange}
          onBlur={() => setShowEditor(false)}
          autoFocus
        />
      ) : (
        <Box onClick={() => setShowEditor(true)}>
          <MarkdownView markdown={task.title} />
        </Box>
      )}
    </Box>
  );
}

export default memo(Task, (prev, next) => {
  if (
    _.isEqual(prev.task, next.task) &&
    _.isEqual(prev.index, next.index) &&
    prev.onDelete === next.onDelete &&
    prev.onDropHover === next.onDropHover &&
    prev.onUpdate === next.onUpdate
  ) {
    return true;
  }

  return false;
});
