import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({ theme }) => theme.COLORS.BLACK};

    border: none;
    font-size: 36px;
    display: flex;
    gap: 24px;
`

export const Line = styled.div`
    border: 1px solid #DDDDDD;
    width: 1069px;
`