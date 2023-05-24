import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 20px;
  border-radius: 8px;

  .card-skeleton {
    width: 333px;
    height: 177px;
  }

`;

export const Background = styled.div`
  padding-top: 12px;

  > .row-skeleton {
    height: 22px;
    border-radius: 8px;
    
    &:nth-child(1) {
      width: 80%;
      height: 15px;
      margin-bottom: 10px;
    }
  }
`;
