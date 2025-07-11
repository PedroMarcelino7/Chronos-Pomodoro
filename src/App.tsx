import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container/Container';
import { Logo } from './components/Logo/Logo';
import { Menu } from './components/Menu/Menu';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
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