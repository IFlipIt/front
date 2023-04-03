import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;
    
    display: flex;
    justify-content: end;
    padding: 32px 49px 0;
    gap: 56px;
`

export const Logout = styled.button`
    border: none;
    background: none;
    display: flex;
    gap: 16px;
    text-align: center;

    > svg {
    font-size: 24px;
    }

    > svg, p{
        vertical-align: middle;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`

export const Profile = styled.button`
    border: none;
    background: none;
    display: flex;
    gap: 16px;
    text-align: center;

    > svg {
    font-size: 24px;
    }

    > svg, p{
        vertical-align: middle;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`