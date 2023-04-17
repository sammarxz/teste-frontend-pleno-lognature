import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';

import { Logo } from '@/modules/common/components';

import { Notifications, UserProfile } from './components';

import { useDashboard } from '../../hooks';

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { onOpen } = useDashboard();

  return (
    <Flex as="header" h="20" align="center" justify="space-between">
      <Flex align="center" gap="6">
        {!isWideVersion ? (
          <IconButton
            aria-label="abrir menu"
            icon={<Icon as={RiMenuLine} color="gray.300" />}
            fontSize="24"
            width="40px"
            height="28px"
            variant="unstyled"
            onClick={onOpen}
          />
        ) : null}
        <Logo maxWidth="120px" />
      </Flex>
      <Flex>
        <Notifications />
        <UserProfile name="Samuel Marxz" email="sammarxz@protonmail.com" />
      </Flex>
    </Flex>
  );
}
