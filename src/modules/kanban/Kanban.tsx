import { Box, SimpleGrid, Stack } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Column, Header } from './components';
import { ColumnType } from './components/Column/types';

export function Kanban() {
  return (
    <Box as="section">
      <Stack spacing="8">
        <Header />
        <DndProvider backend={HTML5Backend}>
          <SimpleGrid columns={[1, 3]} spacing={[16, 4]}>
            <Column column={ColumnType.TO_DO} />
            <Column column={ColumnType.IN_PROGRESS} />
            <Column column={ColumnType.COMPLETED} />
          </SimpleGrid>
        </DndProvider>
      </Stack>
    </Box>
  );
}
