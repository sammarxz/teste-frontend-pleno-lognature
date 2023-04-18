import { Box, IconButton, Textarea } from '@chakra-ui/react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { TaskModel } from './types';

type TaskProps = {
  index: number;
  task: TaskModel;
  onUpdate: (id: TaskModel['id'], updatedTask: TaskModel) => void;
  onDelete: (id: TaskModel['id']) => void;
};

export function Task({
  index,
  task,
  onUpdate: handleUpdate,
  onDelete: handleDelete,
}: TaskProps) {
  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;
    handleUpdate(task.id, { ...task, title: newTitle });
  };

  const handleDeleteClick = () => {
    handleDelete(task.id);
  };

  return (
    <Box
      role="group"
      position="relative"
      rounded="lg"
      w="full"
      py={3}
      px={6}
      bg="gray.800"
      cursor="grab"
    >
      <IconButton
        variant="unstyled"
        position="absolute"
        top={0}
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
      <Textarea
        value={task.title}
        variant="unstyled"
        cursor="inherit"
        resize="none"
        minH={70}
        maxH={200}
        focusBorderColor="none"
        onChange={handleTitleChange}
      />
    </Box>
  );
}
