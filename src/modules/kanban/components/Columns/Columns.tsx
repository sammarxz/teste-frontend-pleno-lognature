import { SimpleGrid } from '@chakra-ui/react';

import { Column } from './components';

import { columns } from './data/columns';

export function Columns() {
  return (
    <SimpleGrid columns={[1, 3]} spacing={10}>
      {columns.map(({ name }, index) => (
        <Column key={name} name={name} index={index} />
      ))}
    </SimpleGrid>
  );
}
