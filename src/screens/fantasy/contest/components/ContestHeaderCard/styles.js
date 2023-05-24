import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  border-radius: 16px;
  margin-top: 24px;
`

export const TournamentContainer = styled.div`
  padding: 24px;
`

export const BackgroundImage = styled.div`
  height: 120px;
  width: 100%;
  position: absolute;
  border-radius: 16px;
  top: 0;
  background: url('${({ map }) => map}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;

  > h2 {
    font-size: 16px !important;
    margin-top: 8px;
    z-index: 1;
  }

  > span {
    font-size: 28px !important;
    font-weight: bold;
    margin-top: 10px;
    z-index: 1;
  }
`
