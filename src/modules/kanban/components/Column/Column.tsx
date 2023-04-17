import { Box, Button, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { RiAddFill } from 'react-icons/ri';

import { Task } from '../Task/Task';
import { mockTasks } from './data/mockTasks';
import { ColumnType } from './types/enums';
import { columnColorScheme } from './utils/columnColorScheme';

type ColumnProps = {
  column: ColumnType;
};

export function Column({ column }: ColumnProps) {
  const ColumnTasks = mockTasks.map((task, index) => (
    <Task key={task.id} task={task} index={index} />
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
          <Text fontWeight="semibold">{column}</Text>
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
        >
          Adicionar Tarefa
        </Button>
      </Stack>
      <Stack
        direction={['row', 'column']}
        h={[300, 600]}
        p={4}
        mt={2}
        spacing={4}
        bg="gray.800"
        rounded="lg"
        overflow="auto"
      >
        {ColumnTasks}
      </Stack>
    </Box>
  );
}
