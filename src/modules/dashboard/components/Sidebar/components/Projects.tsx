import { Box, Flex, Text } from '@chakra-ui/react';

type ProjectsProps = {
  title: string;
  color: string;
  isActive?: boolean;
};

export function Projects({ title, color, isActive }: ProjectsProps) {
  return (
    <Flex
      align="center"
      gap="4"
      cursor="pointer"
      w="full"
      bg={isActive ? 'gray.800' : 'transparent'}
      py="2"
      px="4"
      rounded="md"
    >
      <Box
        as="span"
        display="block"
        width="10px"
        height="10px"
        rounded="full"
        bg={`${color}.300`}
      />
      <Text>{title}</Text>
    </Flex>
  );
}
