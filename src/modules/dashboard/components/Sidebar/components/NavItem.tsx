import { Flex, Icon, Link, Text } from '@chakra-ui/react';

import { menu } from '../data/menu';

type Values = (typeof menu.items)[0];

export function NavItem({ title, icon }: Values) {
  return (
    <Link key={title} href={`#${title}`}>
      <Flex align="center" gap="4">
        <Icon as={icon} fontSize="20" color="purple.400" />
        <Text fontWeight="medium">{title}</Text>
      </Flex>
    </Link>
  );
}
