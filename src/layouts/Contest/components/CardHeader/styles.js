import styled from 'styled-components'
import media from 'styled-media-query'


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 180px;
  align-items: flex-end;


  ${media.lessThan('medium')`
    padding-right: 16px;
    padding-left: 16px;
  `}

  > div {
    display: flex;
    flex-direction: column;

    > h2 {
      font-size: 32px !important;
      margin-bottom: 12px;
    }

    > span {
      font-size: 18px !important;

      > a {
        color: #54C3C5;
      }
    }
  }
`

export const Content = styled.div`
  z-index: 1;
`

export const BackgroundImage = styled.div`
  height: 280px;
  width: 100%;
  position: absolute;

  top: 0;
  background: url('${({ game }) => game}');
  -webkit-mask-image: -webkit-gradient(
    linear,
    center bottom,
    center top,
    color-stop(0, rgba(0, 0, 0, 0)),
    color-stop(1, rgba(0, 0, 0, 1))
  );
`

export const JoinTournamentButton = styled.button`
  height: 40px;
  width: 170px;
  text-align: center;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.yellowLight};
  font-weight: bold;
  cursor: pointer;
  position: relative;
  float: right;
  margin-top: -50px;
  margin-right: 20px;

  &:hover {
    opacity: 0.8;
  }
`

export const AvatarRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  margin-left: 10px;
`

export const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: ${props => (props.imageUrl ? props.imageUrl : '#FFD27B' )};
  background-color: black;
  object-fit: contain;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-left: -10px;
  border: 2px solid black;
  padding: 4px;

  font-weight: 400;
  font-size: 14px;
  color: white;
`
