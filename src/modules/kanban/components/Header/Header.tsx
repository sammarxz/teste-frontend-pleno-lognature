import { Flex, Stack } from '@chakra-ui/react';

import { Options, Title, Users } from './components';

export function Header() {
  return (
    <Flex gap="4" justify="space-between" direction={['column', 'row']}>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Title name="Desafio LogNature" />
        <Users />
      </Stack>
      <Stack direction="row" spacing="8" align="center" justify="space-around">
        <Options />
      </Stack>
    </Flex>
  );
}
