import {
  Divider,
  Flex,
  Icon,
  IconButton,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';

import { Logo } from '@/modules/common/components';

import { Notifications, SearchBox, UserProfile } from './components';

import { useDashboard } from '../../hooks';

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { onOpen } = useDashboard();

  return (
    <Flex as="header" h="20" align="center" gap="6">
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
      {isWideVersion ? (
        <SearchBox ml="140" maxWidth="500px" placeholder="Buscar Tarefas..." />
      ) : null}
      <Stack align="center" direction="row" spacing={['4', '6']} ml="auto">
        <Notifications />
        <Divider orientation="vertical" borderColor="gray.700" height="10" />
        <UserProfile name="Samuel Marxz" email="sammarxz@protonmail.com" />
      </Stack>
    </Flex>
  );
}
