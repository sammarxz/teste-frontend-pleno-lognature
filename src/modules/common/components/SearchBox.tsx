import { Flex, Icon, Input } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

type SearchBoxProps = {
  placeholder: string;
};

export function SearchBox({ placeholder = 'Search...' }: SearchBoxProps) {
  return (
    <Flex
      as="label"
      py="4"
      px="8"
      color="gray.200"
      flex="1"
      position="relative"
      bg="gray.800"
      borderRadius="full"
      alignSelf="center"
    >
      <Input
        color="gray.500"
        variant="unstyled"
        placeholder={placeholder}
        _placeholder={{ color: 'gray.400' }}
        mr="4"
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
