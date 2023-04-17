import { ComponentDefaultProps, Flex, Icon, Input } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

interface SearchBoxProps extends ComponentDefaultProps {
  placeholder: string;
}

export function SearchBox(props: SearchBoxProps) {
  const { placeholder } = props;

  return (
    <Flex
      as="label"
      py="2"
      px="6"
      color="gray.200"
      flex="1"
      position="relative"
      bg="gray.800"
      borderRadius="lg"
      border="1px"
      borderColor="gray.700"
      alignSelf="center"
      {...props}
    >
      <Input
        color="gray.500"
        variant="unstyled"
        placeholder={placeholder}
        _placeholder={{ color: 'gray.600' }}
        mr="4"
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
