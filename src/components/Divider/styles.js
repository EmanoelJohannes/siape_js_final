import styled from 'styled-components'

export const DividerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const DividerLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkBackgroundLighter};
`

export const SpanText = styled.span`
  margin-left: 15px;
  margin-right: 15px;

  font-weight: 400;
  font-size: 16px;
  color: #88869F;
`
