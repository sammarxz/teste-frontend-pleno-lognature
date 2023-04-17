import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

type UserProfileProps = {
  name: string;
  email: string;
};

export function UserProfile({ name, email }: UserProfileProps) {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>{name}</Text>
        <Text color="gray.300" fontSize="small">
          {email}
        </Text>
      </Box>
      <Avatar size="md" name={name} />
    </Flex>
  );
}
