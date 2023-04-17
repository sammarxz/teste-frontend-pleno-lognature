import { Flex } from '@chakra-ui/react';

import { Logo } from '@/modules/common/components';

import { Notifications, UserProfile } from './components';

export function Header() {
  return (
    <Flex as="header" h="20" align="center" justify="space-between">
      <Logo boxSize="120px" />
      <Flex>
        <Notifications />
        <UserProfile name="Samuel Marxz" email="sammarxz@protonmail.com" />
      </Flex>
    </Flex>
  );
}
