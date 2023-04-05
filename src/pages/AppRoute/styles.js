import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 268px auto;
  grid-template-rows: 78px calc(100% - 78px);
  grid-template-areas: "brand header" "menu content";

  background-color: ${({ theme }) => theme.BODY_BACKGROUND};
`;

export const Brand = styled.div`
  grid-area: brand;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
`;

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

export const Content = styled.div`
  width: 100%;
  grid-area: content;
  padding: 0 24px;
`;
