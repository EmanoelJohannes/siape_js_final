import React from 'react'

import {
  Header,
  ItemHeader,
  GameControllerIcon,
  GetStartedButton,
  SwordIcon,
  PeopleTeamIcon
} from './styles'

export default function HowPlayFantasy() {
  return (
    <Header>
      <h2>WELCOME TO STATTRAK</h2>
      <span>Your favorite fantasy plataform</span>

      <div>
        <ItemHeader>
          <PeopleTeamIcon />
          <div>
            <h3>Find a team</h3>
            <span>Find teams or teamates and create your own.</span>
          </div>
        </ItemHeader>

        <ItemHeader>
          <GameControllerIcon />
          <div>
            <h3>Join Tornaments</h3>
            <span>Find a tornament that suits your team and join.</span>
          </div>
        </ItemHeader>

        <ItemHeader>
          <SwordIcon />
          <div>
            <h3>Play Tornaments</h3>
            <span>Face others teams and win valueable prizes.</span>
          </div>
        </ItemHeader>
      </div>

      <GetStartedButton>Get Started</GetStartedButton>
    </Header>
  )
}
