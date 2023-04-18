import { Box, IconButton, Textarea } from '@chakra-ui/react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { TaskModel } from './types';

type TaskProps = {
  index: number;
  task: TaskModel;
};

export function Task({ index, task }: TaskProps) {
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
      />
      <Textarea
        value={task.title}
        variant="unstyled"
        cursor="inherit"
        resize="none"
        minH={70}
        maxH={200}
        focusBorderColor="none"
      />
    </Box>
  );
}
