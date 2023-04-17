import { Flex } from '@chakra-ui/react';

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <Flex
      direction="column"
      h="100vh"
      w="100%"
      my="6"
      maxWidth={1480}
      mx="auto"
      px="6"
    >
      {children}
    </Flex>
  );
}
