import styled from 'styled-components'
import Colors from '../../theme/theme.color'

export const ContainerGrid = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 1246px;
  padding: 0 15px;
  margin-top: 150px;
  margin-bottom: 150px;
`

export const ContainerCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 140px;
`

export const ImageLeft = styled.div`
  position: relative;
`
export const ImageIconCheck = styled.div`
  width: 100px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 80px;
  left: -80px;

  background-color: ${Colors.brand.brandColorRedLight};
  border-radius: 15px;
`
export const ImageIconNavigate = styled.div`
  width: 100px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 350px;
  right: -65px;

  background-color: ${Colors.brand.brandColorRedLight};
  border-radius: 15px;
`
export const ImageIconFavorite = styled.div`
  width: 100px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 166px;
  left: -45px;

  background-color: ${Colors.brand.brandColorRedLight};
  border-radius: 15px;
`

export const TextRight = styled.div``

export const Title = styled.div`
  color: ${Colors.neutra.dark};
  font-family: 'DM Sans';
  font-size: 56px;
  font-weight: 500;
  line-height: 110%; /* 61.6px */
  letter-spacing: -3px;
  margin-bottom: 25px;

  span {
    color: ${Colors.brand.brandColorRed};
  }
`

export const Description = styled.div`
  color: ${Colors.neutra.dark};
  font-size: 22px;
  font-weight: 500;
  line-height: 160%; /* 35.2px */
`

export const List = styled.div`
  margin-top: 54px;
`

export const ItemList = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding-bottom: 36px;
  margin-bottom: 36px;
  border-bottom: 0.5px solid rgba(235, 56, 80, 0.2);
`

export const IconBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: ${Colors.brand.brandColorRedLight};
  border-radius: 8px;
`

export const SubTitle = styled.div``

export const Paragraph = styled.div``
