import { Header } from './components';

type DashboardProps = {
  children: JSX.Element;
};

export function Dashboard({ children }: DashboardProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
