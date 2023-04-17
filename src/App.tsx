import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '@/styles/theme';

import { Container } from '@/modules/common/components';

import { Dashboard, Kanban } from '@/modules';

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container>
        <Dashboard>
          <Kanban />
        </Dashboard>
      </Container>
    </ChakraProvider>
  );
}

export default App;
