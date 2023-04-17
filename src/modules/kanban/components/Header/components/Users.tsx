import { Avatar, AvatarGroup, Icon, IconButton, Stack } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';

import { users } from '../data/users';

export function Users() {
  return (
    <Stack direction="row" align="center">
      <AvatarGroup borderColor="gray.900" max={4} size="sm">
        {users.map(({ name }, index) => (
          <Avatar
            key={name}
            name={name}
            bgColor={`purple.${(index + 1) * 100}`}
            color="purple.900"
          />
        ))}
      </AvatarGroup>
      <IconButton
        variant="outline"
        colorScheme="purple"
        aria-label="adicionar usuário"
        fontSize="20px"
        rounded="full"
        size="sm"
        icon={<Icon as={RiAddLine} />}
      />
    </Stack>
  );
}
