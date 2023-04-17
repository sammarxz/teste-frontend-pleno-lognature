import { Flex } from '@chakra-ui/react';

import { Logo } from '@/modules/common/components';

import { Notifications } from './Notifications';
import { UserProfile } from './UserProfile';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      justify="space-between"
    >
      <Logo boxSize="100px" />
      <Flex>
        <Notifications />
        <UserProfile name="Samuel Marxz" email="sammarxz@protonmail.com" />
      </Flex>
    </Flex>
  );
}
