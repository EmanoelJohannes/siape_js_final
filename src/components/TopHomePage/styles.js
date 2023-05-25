import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffd789;
  width: 100%;
  height: 90px;
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
`;

export const ButtonCadastrar = styled.button`
  border-radius: 20px;
  padding: 10px;
  background-color: white;
  cursor: pointer;
  font-weight: bold;
  margin-right: 5px;
`;

export const ButtonLogar = styled.button`
  border-radius: 12px;
  padding: 10px;
  background-color: black;
  cursor: pointer;
  font-weight: bold;
  color: white;

  transition: 0.3s ease-out;

  &:hover {
    background-color: white;
    transition: 0.3s ease-out;
    color: black;
  }
`;

export const BoxButtonsTop = styled.div`
  display: flex;
`;

export const SIAPELogo = styled.div`
  border-left: 6px solid black;
`;
