import { HStack, Icon } from '@chakra-ui/react';
import { RiNotificationLine } from 'react-icons/ri';

export function Notifications() {
  return (
    <HStack
      spacing="8"
      mx="8"
      pr="8"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="20" />
    </HStack>
  );
}
