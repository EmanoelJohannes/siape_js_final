import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  justify-items: center;

  ${media.lessThan('medium')`
    padding-right: 16px;
    padding-left: 16px;
  `}
`;
