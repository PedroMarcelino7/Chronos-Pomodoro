import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container/Container';
import { Logo } from './components/Logo/Logo';
import { Menu } from './components/Menu/Menu';
import { Countdown } from './components/Countdown/Countdown';
import { Input } from './components/Input/Input';
import { Cycles } from './components/Cycles/Cycles';

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
        <Countdown />
      </Container>

      <Container>
        <form className='form' action="">
          <div className="formRow">
            <Input
              label='Task'
              type='text'
              id='input'
              placeholder='Digite algo...'
            />
          </div>

          <div className="formRow">
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <button>Botão</button>
          </div>
        </form>
      </Container>
    </>
  );
}