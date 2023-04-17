import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '@/styles/theme';

import { Container } from '@/modules/common/components';

import { Dashboard } from '@/modules/dashboard';

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container>
        <Dashboard>
          <p>dashboard</p>
        </Dashboard>
      </Container>
    </ChakraProvider>
  );
}

export default App;
