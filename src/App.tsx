import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '@/styles/theme';

import { Dashboard } from '@/modules/dashboard';

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Dashboard>
        <p>dashboard</p>
      </Dashboard>
    </ChakraProvider>
  );
}

export default App;
