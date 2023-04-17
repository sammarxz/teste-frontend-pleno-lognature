import { Stack, Text } from '@chakra-ui/react';

import { NavItem } from './NavItem';

import { menu } from '../data/menu';

export function Nav() {
  return (
    <Stack spacing="6">
      <Text
        fontWeight="bold"
        color="gray.400"
        fontSize="small"
        textTransform="uppercase"
      >
        {menu.title}
      </Text>
      <Stack spacing="4" align="stretch">
        {menu.items.map(({ title, icon }) => (
          <NavItem key={title} title={title} icon={icon} />
        ))}
      </Stack>
    </Stack>
  );
}
