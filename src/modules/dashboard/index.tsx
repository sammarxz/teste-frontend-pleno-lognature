import { Container, Header, Sidebar } from './components';

type DashboardProps = {
  children: JSX.Element;
};

export function Dashboard({ children }: DashboardProps) {
  return (
    <Container>
      <Header />
      <Sidebar />
      {children}
    </Container>
  );
}
