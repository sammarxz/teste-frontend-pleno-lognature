import { Flex, SimpleGrid, Stack } from '@chakra-ui/react';

import { Header, Sidebar } from './components';

import { DashboardContextProvider } from './context';

type DashboardProps = {
  children: JSX.Element;
};

export function Dashboard({ children }: DashboardProps) {
  return (
    <DashboardContextProvider>
      <Stack spacing="6">
        <Header />
        <Flex>
          <Sidebar />
          <SimpleGrid flex="1" gap="4" minChildWidth="320px">
            {children}
          </SimpleGrid>
        </Flex>
      </Stack>
    </DashboardContextProvider>
  );
}
