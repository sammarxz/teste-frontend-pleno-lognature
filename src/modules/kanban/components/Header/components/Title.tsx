import { Text } from '@chakra-ui/react';

type TitleProps = {
  name: string;
};

export function Title({ name }: TitleProps) {
  return (
    <Text as="h2" fontSize={['xl', '3xl']} fontWeight="semibold">
      {name}
    </Text>
  );
}
