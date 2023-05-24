import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 20px;
  
    .card-skeleton {
      width: 200px;
      height: 277px;
      border-radius: 8px;
    }

    .row-skeleton {
      height: 12px;
      border-radius: 8px;

      &:nth-child(2) {
        width: 80%;
        height: 20px;
        margin-top: 12px;
      }
      &:nth-child(3) {
        margin-top: 12px;
        width: 35%;
        height: 16px;
      }
    }
`;