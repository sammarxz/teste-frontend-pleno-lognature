import { Stack } from '@chakra-ui/react';

import { NavList } from './NavList';
import { NavSection } from './NavSection';

import { menu } from '../data/menu';

export function SidebarContent() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title={menu.title}>
        <NavList menu={menu} />
      </NavSection>
      <NavSection title="projetos" />
    </Stack>
  );
}
