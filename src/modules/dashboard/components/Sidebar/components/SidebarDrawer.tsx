import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';

import { Logo } from '@/modules/common/components';

import { useDashboard } from '@/modules/dashboard/hooks';

import { SidebarContent } from './SidebarContent';

export function SidebarDrawer() {
  const { isOpen, onClose } = useDashboard();

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="gray.800" px="4" py="8">
          <DrawerHeader>
            <DrawerCloseButton mt="9" mr="4" color="gray.500" />
            <Logo maxWidth="120" />
          </DrawerHeader>
          <DrawerBody mt="8">
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
