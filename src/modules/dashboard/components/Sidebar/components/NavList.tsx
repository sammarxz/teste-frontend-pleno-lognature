import { Stack } from '@chakra-ui/react';

import { NavItem, NavItemProps } from './NavItem';

type NavListProps = {
  menu: {
    items: NavItemProps[];
  };
};

export function NavList({ menu }: NavListProps) {
  return (
    <Stack spacing="4" align="stretch">
      {menu.items.map(({ title, icon }) => (
        <NavItem key={title} title={title} icon={icon} />
      ))}
    </Stack>
  );
}
