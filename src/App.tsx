import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container/Container';
import { Logo } from './components/Logo/Logo';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <section>MENU</section>
      </Container>

      <Container>
        <section>FORM</section>
      </Container>

      <Container>
        <section>FOOTER</section>
      </Container>
    </>
  );
}