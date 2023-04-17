import { ButtonGroup } from '@chakra-ui/react';
import { RiFilterLine, RiLayoutColumnLine, RiListCheck2 } from 'react-icons/ri';

import { Button } from '@/modules/common/components';

export function Options() {
  return (
    <ButtonGroup spacing="4" alignItems="center">
      <Button iconLeft icon={RiLayoutColumnLine} isActive>
        Kanban
      </Button>
      <Button iconLeft icon={RiListCheck2}>
        Lista
      </Button>
      <Button iconLeft icon={RiFilterLine}>
        Filtrar
      </Button>
    </ButtonGroup>
  );
}
