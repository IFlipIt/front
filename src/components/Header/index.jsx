import { MdLogout, MdOutlinePersonOutline } from 'react-icons/md'
import { Container, Profile, Logout } from './styles'

export function Header() {
    return (
        <Container>
            <Profile>
                <MdOutlinePersonOutline />
                <p>Gabriel Rennó</p>
            </Profile>
            <Logout>
                <p> Sair </p>
                <MdLogout />
            </Logout>
        </Container>
    )
}