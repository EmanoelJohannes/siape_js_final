import React from 'react'

import { Container } from './styles'
import Accordion from '../../components/AccordionItem'

export default function Home() {
  const faq = [
    {
      title: 'What is a fantasy game?',
      content:
        'A virtual game where you assemble your team with real players who will participate in official matches. Players receive scores depending on their performance in matches.'
    },
    {
      title: 'How does the fantasy game work?',
      content:
        "You can assemble a team for each contest, by choosing 5 available players with a monetary limit and following the game rules. You can track your team's performance during matches."
    },
    {
      title: 'What are contests?',
      content:
        'Contests are short competitions for a given round of a championship.'
    },
    {
      title: 'Do i need to pay to play?',
      content:
        'No. Albeit with premium restrictions all game modes are free for all players.'
    },
    {
      title: 'What are the contest prizes?',
      content:
        'The top ranking players in the contests receive Satoshis as a reward, you can withdraw your satoshis to your wallet.'
    },
    {
      title: 'What are satoshis(SATS)?',
      content:
        'Satoshi is the smallest fraction of Bitcoin, equivalent to 100 millionth of a bitcoin. Participate in Stattrak games and receive satoshis for your performance so you can withdraw satoshis to your wallet.'
    }
  ]

  return (
    <Container>
      <Accordion title="Frequently asked questions" data={faq} />
    </Container>
  )
}
