import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '@/styles/theme';

import { Container } from '@/modules/common/components';

import { Boards, Dashboard } from '@/modules';

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container>
        <Dashboard>
          <Boards />
        </Dashboard>
      </Container>
    </ChakraProvider>
  );
}

export default App;
