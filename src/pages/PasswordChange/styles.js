import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    
    align-items: center;
    text-align: center;
   
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Form = styled.form`
  background: white;
  border-radius: 20px;
  margin: 20px auto; 
  height: 422px;
  width: 498px;
  padding: 0 60px 46px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  > p {
    margin-top: 9px;
    margin-bottom: 36px;
  }
`