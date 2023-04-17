import { Box, useBreakpointValue } from '@chakra-ui/react';

import { SidebarContent, SidebarDrawer } from './components';

export function Sidebar() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return <SidebarDrawer />;
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarContent />
    </Box>
  );
}
