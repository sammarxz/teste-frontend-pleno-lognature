import { Flex, SimpleGrid, Stack } from '@chakra-ui/react';

import { Container, Header, Sidebar } from './components';

type DashboardProps = {
  children: JSX.Element;
};

export function Dashboard({ children }: DashboardProps) {
  return (
    <Container>
      <Stack spacing="6">
        <Header />
        <Flex>
          <Sidebar />
          <SimpleGrid flex="1" gap="4" minChildWidth="320px">
            {children}
          </SimpleGrid>
        </Flex>
      </Stack>
    </Container>
  );
}
