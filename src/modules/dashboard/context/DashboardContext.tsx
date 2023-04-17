import { createContext } from 'react';

import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react';

type DashboardContextData = UseDisclosureReturn;

type DashboardContextProviderProps = {
  children: React.ReactNode;
};

export const DashboardContext = createContext({} as DashboardContextData);

export function DashboardContextProvider({
  children,
}: DashboardContextProviderProps) {
  const disclosure = useDisclosure();

  return (
    <DashboardContext.Provider value={disclosure}>
      {children}
    </DashboardContext.Provider>
  );
}
