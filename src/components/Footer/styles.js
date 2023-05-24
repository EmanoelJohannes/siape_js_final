import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.blackBackground};

  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 32px 20px;

  ${media.lessThan('medium')`
    padding: 20px;
  `}
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const WrapperSectionMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;

  ${media.lessThan('medium')`
    width: 100%;
  `}

  > span {
    color: ${({ theme }) => theme.colors.darkText};
  }
`

export const WrapperSection = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan('medium')`
    display: none;
  `}

  > strong {
    color: white;
    margin-bottom: 12px;
  }

  > a {
    color: ${({ theme }) => theme.colors.darkText};
    margin-top: 20px;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const WrapperSectionMobile = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan('medium')`
    margin-top: 16px;
    width: 100%;
  `}

  > strong {
    color: white;
  }
`

export const MobileStoresWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan('medium')`
    flex-direction: row;
    justify-content: space-between;
  `}
`

export const StoreButton = styled.a`
  width: 132px;
  height: 40px;
  border: 1px solid rgb(136 134 159/0.15);
  padding: 10px;

  margin-top: 10px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  > img {
    border: 1px solid rgb(136 134 159/0.15);
    padding: 10px;
    border-radius: 5px;
  }

  ${media.lessThan('medium')`
    width: 152px;
    height: 60px;
  `}
`

export const DiscordButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191a24;
  color: #7289da;
  font-size: 1rem;
  font-weight: 500;

  padding: 12px 24px 12px 20px;
  border-radius: 10px;
  width: 277px;

  margin-top: 20px;

  ${media.lessThan('medium')`
    width: 100%;
  `}

  cursor: pointer;

  > svg {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`

export const FooterBottomSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
  margin-bottom: 30px;
  align-items: center;
  border-top: 1px solid rgb(136 134 159/0.15);
  color: ${({ theme }) => theme.colors.darkText};

  ${media.lessThan('medium')`
    flex-direction: column;
  `}

  > span {
    padding-top: 20px;
    max-width: 512px;
    font-size: 12px;
  }

  ${media.greaterThan('medium')`
    margin: 20px auto;
  `}
`

export const FooterMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-self: end;

  ${media.lessThan('medium')`
    margin-top: 8px;
  `};

  a {
    color: white;
    display: flex;
    align-items: center;

    &:hover {
      color: #ffd789;
    }
  }
`

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  background: gray;
  border-radius: 50%;
  margin-right: 12px;
  margin-left: 12px;
  display: flex;
  align-self: center;
`

export const Corporate = styled.span`
  color: #88869f;
  font-size: 16px !important;
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;

  ${media.lessThan('medium')`
    margin-bottom: 12px;
  `}
`
