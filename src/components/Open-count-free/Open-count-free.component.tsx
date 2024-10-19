import ContainerGrid from '../Container-grid/Container-grid.component'

import CellPhone from '../../assets/app.png'
import IconCheck from '../../assets/check-circle.svg'
import IconFavorite from '../../assets/heart.svg'
import IconNavigate from '../../assets/mouse-pointer.svg'

import {
  ContainerCount,
  Description,
  IconBg,
  ImageLeft,
  List,
  Paragraph,
  SubTitle,
  TextRight,
  Title
} from './Open-count-free.styles'

const OpenCountFree = () => {
  return (
    <>
      <ContainerGrid>
        <ContainerCount>
          <ImageLeft>
            <img src={CellPhone} alt='Cell Phone' />
            <img src={IconCheck} alt='Icon check' />
            <img src={IconNavigate} alt='Icon Favorite' />
            <img src={IconFavorite} alt='Icon navegate' />
          </ImageLeft>
          <TextRight>
            <Title></Title>
            <Description></Description>
            <List>
              <IconBg></IconBg>
              <SubTitle></SubTitle>
              <Paragraph></Paragraph>
            </List>
          </TextRight>
        </ContainerCount>
      </ContainerGrid>
    </>
  )
}

export default OpenCountFree
