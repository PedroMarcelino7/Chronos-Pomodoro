import { Container } from '../../components/Container/Container'
import { Countdown } from '../../components/Countdown/Countdown'
import { MainForm } from '../../components/MainForm/MainForm'
import { MainTemplate } from '../../templates/MainTemplate/MainTemplate'

export function Home() {
    return (
        <MainTemplate>
            <Container>
                <Countdown />
            </Container>

            <Container>
                <MainForm />
            </Container>
        </MainTemplate>
    )
}