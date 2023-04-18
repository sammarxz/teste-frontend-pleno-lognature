import { Box, Button, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { RiAddFill } from 'react-icons/ri';

import { Task } from '../Task/Task';
import { useColumnTasks } from './hooks/useColumnTasks';
import { ColumnType } from './types';
import { columnColorScheme } from './utils/columnColorScheme';

type ColumnProps = {
  column: ColumnType;
};

export function Column({ column }: ColumnProps) {
  const { tasks, addEmptyTask, updateTask, deleteTask } =
    useColumnTasks(column);

  const ColumnTasks = tasks.map((task, index) => (
    <Task
      key={task.id}
      task={task}
      index={index}
      onDelete={deleteTask}
      onUpdate={updateTask}
    />
  ));

  return (
    <Box as="section">
      <Stack spacing="2">
        <Flex align="center" gap="4">
          <Box
            as="span"
            w="10px"
            h="10px"
            rounded="full"
            bg={columnColorScheme[column]}
          />
          <Text fontWeight="semibold">
            {column} ({tasks.length})
          </Text>
        </Flex>
        <Button
          size="sm"
          w="full"
          fontWeight="regular"
          bg="gray.800"
          border="2px"
          borderStyle="dashed"
          borderColor="gray.700"
          py={5}
          aria-label="Adicionar Tarefa"
          _hover={{
            bg: 'gray.700',
          }}
          rightIcon={<Icon as={RiAddFill} />}
          onClick={addEmptyTask}
        >
          Adicionar Tarefa
        </Button>
      </Stack>
      <Stack
        direction={['row', 'column']}
        h={[300, 600]}
        mt={4}
        spacing={4}
        rounded="lg"
        overflow="auto"
      >
        {ColumnTasks}
      </Stack>
    </Box>
  );
}
