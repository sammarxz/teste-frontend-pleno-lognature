import { Box, Flex, Text } from '@chakra-ui/react';

type ColumnProps = {
  name: string;
  index: number;
};

export function Column({ name, index }: ColumnProps) {
  return (
    <Box as="section">
      <Flex align="center" gap="4">
        <Box
          as="span"
          w="10px"
          h="10px"
          rounded="full"
          bg={`purple.${(index + 3) * 100}`}
        />
        <Text fontWeight="semibold">{name}</Text>
      </Flex>
    </Box>
  );
}
