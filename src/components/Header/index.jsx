import { MdLogout, MdOutlinePersonOutline } from 'react-icons/md'
import { Container, Profile, Logout } from './styles'

import {useAuth} from '../../hooks/auth'

export function Header() {

    const { signOut } = useAuth()

    return (
        <Container>
            <Profile>
                <MdOutlinePersonOutline />
                <p>Gabriel Rennó</p>
            </Profile>
            <Logout onClick={signOut}>
                <p> Sair </p>
                <MdLogout />
            </Logout>
        </Container>
    )
}