import {
  Button as Btn,
  ButtonProps as BtnProps,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface ButtonProps extends BtnProps {
  icon?: IconType;
  iconLeft?: boolean;
}

export function Button(props: ButtonProps) {
  const { children, icon, iconLeft } = props;

  return (
    <Btn
      variant="unstyled"
      bg="gray.800"
      border="1px"
      borderColor="gray.700"
      px="3"
      color="gray.500"
      iconSpacing="3"
      fontWeight="semibold"
      fontSize="sm"
      _hover={{ bg: 'gray.700' }}
      _active={{
        bg: 'gray.700',
        borderColor: 'gray.600',
        textColor: 'gray.400',
      }}
      {...props}
    >
      <Flex align="center" gap="2">
        {icon ? (
          <Icon as={icon} fontSize="18px" order={iconLeft ? '0' : '1'} />
        ) : null}
        <Text>{children}</Text>
      </Flex>
    </Btn>
  );
}
