
import styled, { css } from "styled-components";
import { KeyboardArrowDown } from '../../../assets/icons';

export const StyledChevron = styled(KeyboardArrowDown)`
  color: black;
  transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
  transform: ${props => (props.active ? 'rotate(180deg)' : '')};
  height: 16px;
  width: 16px;
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  margin-top: 60px;
`;

export const AccordionContainer = styled.div`
  margin-bottom: 12px;
`;

export const AccordionInner = styled.div`
  position: relative;
  width: 100%;
`;

export const AccordionItem = styled.div`
  background: #ddd;
  border-radius: 4px;
  margin-bottom: 12px;
  cursor: pointer;
  position: relative;

  &:hover {
    background: #ccc;
  }
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AccordionTitle = styled.h3`
  margin: 0;
  padding: 1rem;
  font-size: 15px;
`;

export const AccordionBody = styled.div`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;


  ${({ active, bodyHeight }) =>
    active &&
    css`
      height: ${bodyHeight}px;
    `}
`;

export const AccordionContent = styled.p`
  margin: 0;
  padding: 0 1rem 1rem;
  height: auto;
  color: #333;
  font-size: 15px;
`;
