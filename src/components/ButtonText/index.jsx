import { Container, Line } from "./styles";

export function ButtonText({title, ...rest}){
    return (
        <>
        <Container type="button" {...rest}>
            <svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.482785 13.8338L13.8345 0.482785C14.4782 -0.160928 15.5225 -0.160928 16.1662 0.482785L17.7236 2.0402C18.3666 2.68323 18.3673 3.72471 17.7263 4.36911L7.14457 14.9997L17.7256 25.6309C18.3673 26.2753 18.3659 27.3168 17.7229 27.9598L16.1655 29.5172C15.5218 30.1609 14.4775 30.1609 13.8338 29.5172L0.482785 16.1655C-0.160928 15.5218 -0.160928 14.4775 0.482785 13.8338Z" fill="black"/></svg>
            {title}
        </Container>
        <Line></Line>
        </>
    )
}