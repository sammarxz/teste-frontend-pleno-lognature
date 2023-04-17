import {
  RiCalendarLine,
  RiFilterLine,
  RiInboxLine,
  RiTimeLine,
} from 'react-icons/ri';

export const menu = {
  title: 'Geral',
  items: [
    {
      title: 'Entrada',
      icon: RiInboxLine,
    },
    {
      title: 'Hoje',
      icon: RiCalendarLine,
    },
    {
      title: 'Em Breve',
      icon: RiTimeLine,
    },
    {
      title: 'Filtros & Labels',
      icon: RiFilterLine,
    },
  ],
};
