import { Avatar, Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

type UserProfileProps = {
  name: string;
  email: string;
};

export function UserProfile({ name, email }: UserProfileProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex align="center" gap="4">
      {isWideVersion ? (
        <Box textAlign="right">
          <Text>{name}</Text>
          <Text color="gray.300" fontSize="small">
            {email}
          </Text>
        </Box>
      ) : null}
      <Avatar size="md" bg="purple.300" name={name} />
    </Flex>
  );
}
