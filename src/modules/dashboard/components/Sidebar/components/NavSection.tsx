import { Stack, Text } from '@chakra-ui/react';

type NavSectionProps = {
  title: string;
  children?: React.ReactNode;
};

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Stack spacing="6">
      <Text
        fontWeight="bold"
        color="gray.400"
        fontSize="small"
        textTransform="uppercase"
      >
        {title}
      </Text>
      {children || null}
    </Stack>
  );
}
