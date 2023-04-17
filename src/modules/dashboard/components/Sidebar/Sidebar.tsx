import { Box, Stack, Text } from '@chakra-ui/react';

import { Nav } from './components';

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Nav />
        <Text
          fontWeight="bold"
          color="gray.400"
          fontSize="small"
          textTransform="uppercase"
        >
          Projetos
        </Text>
      </Stack>
    </Box>
  );
}
