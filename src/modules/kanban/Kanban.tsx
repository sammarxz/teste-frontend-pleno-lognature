import { Box, SimpleGrid, Stack } from '@chakra-ui/react';

import { Column, Header } from './components';
import { ColumnType } from './components/Column/types/enums';

export function Kanban() {
  return (
    <Box as="section">
      <Stack spacing="8">
        <Header />
        <SimpleGrid columns={[1, 3]} spacing={[16, 4]}>
          <Column column={ColumnType.TO_DO} />
          <Column column={ColumnType.IN_PROGRESS} />
          <Column column={ColumnType.COMPELTED} />
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
