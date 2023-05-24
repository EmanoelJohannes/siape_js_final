import React from 'react'

import { DividerContainer, DividerLine, SpanText } from './styles'

export default function Divider(props) {
  return (
    <DividerContainer>
      <DividerLine />
      <SpanText>{props.text}</SpanText>
      <DividerLine />
    </DividerContainer>
  )
}
