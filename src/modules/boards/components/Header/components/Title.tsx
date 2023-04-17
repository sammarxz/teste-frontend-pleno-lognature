import { Flex, Stack, Text } from '@chakra-ui/react';

import { Options } from './Options';
import { Users } from './Users';

type TitleProps = {
  name: string;
};

export function Title({ name }: TitleProps) {
  return (
    <Flex gap="4" justify="space-between" direction={['column', 'row']}>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Text as="h2" fontSize={['xl', '3xl']} fontWeight="semibold">
          {name}
        </Text>
        <Users />
      </Stack>
      <Stack direction="row" spacing="8" align="center" justify="space-around">
        <Options />
      </Stack>
    </Flex>
  );
}
