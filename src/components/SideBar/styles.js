import styled from "styled-components";

export const Menu = styled.ul`
  grid-area: menu;
  background: ${({ theme }) => theme.COLORS.PRIMARY_800};
  padding-top: 24px;
  > li button {
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 18px;
    border: none;
    background: none;
    width: 100%;
    display: flex;
    gap: 16px;
    text-align: center;

    > svg {
      font-size: 24px;
    }

    > svg,
    p {
      vertical-align: middle;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > li button:hover {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  }
`;
