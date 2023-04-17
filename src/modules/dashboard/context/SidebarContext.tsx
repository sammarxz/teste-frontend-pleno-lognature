import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react';
import { createContext } from 'react';

type SidebarContextData = UseDisclosureReturn;

type SidebarContextProviderProps = {
  children: React.ReactNode;
};

export const SidebarContext = createContext({} as SidebarContextData);

export function SidebarContextProvider({
  children,
}: SidebarContextProviderProps) {
  const disclosure = useDisclosure();

  return (
    <SidebarContext.Provider value={disclosure}>
      {children}
    </SidebarContext.Provider>
  );
}
