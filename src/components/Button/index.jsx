import { Container } from './styles.js'

export function Button({title, ...rest}) {
    return (
        <Container type="button" {...rest}>
            {title}
        </Container>
    )
}