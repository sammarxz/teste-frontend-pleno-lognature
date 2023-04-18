import { Stack } from '@chakra-ui/react';

import { NavList } from './NavList';
import { NavSection } from './NavSection';
import { Projects } from './Projects';

import { menu } from '../data/menu';

export function SidebarContent() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title={menu.title}>
        <NavList menu={menu} />
      </NavSection>
      <NavSection title="projetos">
        <Stack>
          <Projects title="Desafio LogNature" color="cyan" isActive />
          <Projects title="Desafio Google" color="green" />
          <Projects title="Freelas" color="orange" />
        </Stack>
      </NavSection>
    </Stack>
  );
}
