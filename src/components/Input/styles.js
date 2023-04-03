import styled from 'styled-components'

export const Container = styled.div`
    width: 379px;
    display: flex;
    align-items: center;
    background: #FAFAFA;
    border: 1px solid #E5E5E5;
    border-radius: 8px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 20px;

    > input{
        height: 56px;
        width: 100%;
        background: transparent;
        border: 0;
        padding: 12px;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_100};

        }

    }

    > svg {
        margin-left: 16px;
    }
`