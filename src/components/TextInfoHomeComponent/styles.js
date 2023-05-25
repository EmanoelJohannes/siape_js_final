import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
  margin-top: 100px;
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export const InfoLeftContent = styled.div`
  width: 40%;

  h1 {
    line-height: 1.3;
  }
`;

export const InforRightContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  width: 60%;
  h1 {
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

export const InfoButtonCadastrar = styled.button`
  background-color: #ffd789;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    background-color: black;
    color: white;
    transition: 0.3s ease-out;
  }
`;
