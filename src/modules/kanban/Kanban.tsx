import { Box, Stack } from '@chakra-ui/react';

import { Columns, Header } from './components';

export function Kanban() {
  return (
    <Box as="section">
      <Stack spacing="8">
        <Header />
        <Columns />
      </Stack>
    </Box>
  );
}
