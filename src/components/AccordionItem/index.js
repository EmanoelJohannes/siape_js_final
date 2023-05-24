import React, { useState } from "react";

import { AccordionContainer, AccordionHeader, AccordionInner, AccordionItem, AccordionTitle, AccordionBody, AccordionContent, StyledChevron, Title } from './styles'

const AccordionItems = ({
  accordionContent,
  refs,
  currentAccordion,
  setCurrentAccordion,
  setBodyHeight,
  bodyHeight
}) =>
  accordionContent.map(({ title, content }, i) => (
    <AccordionItem key={`accordion-item-${i}`}
      onClick={() => {
        if (currentAccordion == i) {
          setCurrentAccordion(null);
        } else {
          setCurrentAccordion(i);
          setBodyHeight(refs[i].current.clientHeight);
        }
      }}
    >
      <AccordionHeader>
        <AccordionTitle>
          {title}
        </AccordionTitle>
        <StyledChevron active={currentAccordion == i} aria-hidden />
      </AccordionHeader>
      <AccordionBody active={currentAccordion === i} bodyHeight={bodyHeight}>
        <AccordionContent ref={refs[i]}>{content}</AccordionContent>
      </AccordionBody>
    </AccordionItem>
  ));

export default function Accordion({title, data}) {
  const [currentAccordion, setCurrentAccordion] = useState(0);
  const [bodyHeight, setBodyHeight] = useState(0);

  let refs = [];

  data.map((item)=>{
     refs.push(item)
  })

  return (
    <>
      <Title>{title}</Title>
      <AccordionContainer>
        <AccordionInner>
          <AccordionItems
            accordionContent={data}
            refs={refs}
            currentAccordion={currentAccordion}
            setCurrentAccordion={setCurrentAccordion}
            setBodyHeight={setBodyHeight}
            bodyHeight={bodyHeight}
          />
        </AccordionInner>
      </AccordionContainer>
    </>
  );
}
