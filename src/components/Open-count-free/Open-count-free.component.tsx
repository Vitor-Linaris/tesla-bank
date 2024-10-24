import CellPhone from '../../assets/app.png'
import IconCheck from '../../assets/check-circle.svg'
import IconFavorite from '../../assets/heart.svg'
import IconNavigate from '../../assets/mouse-pointer.svg'
import IconDollar from '../../assets/dollar-sign.svg'

import {
  ContainerCount,
  ContainerGrid,
  Description,
  IconBg,
  ImageIconCheck,
  ImageIconFavorite,
  ImageIconNavigate,
  ImageLeft,
  ItemList,
  List,
  Paragraph,
  SubTitle,
  TextRight,
  Title
} from './Open-count-free.styles'

type Item = {
  image: string
  titleFree: string
  text: string
}

const Items: Item[] = [
  {
    image: IconDollar,
    titleFree: 'Seu dinheiro rendendo mais',
    text: 'Rendem mais que a poupança e você resgata quando quiser.'
  },
  {
    image: IconDollar,
    titleFree: 'Seu dinheiro rendendo mais',
    text: 'Rendem mais que a poupança e você resgata quando quiser.'
  },
  {
    image: IconDollar,
    titleFree: 'Seu dinheiro rendendo mais',
    text: 'Rendem mais que a poupança e você resgata quando quiser.'
  }
]

const OpenCountFree = () => {
  return (
    <>
      <ContainerGrid>
        <ContainerCount>
          <ImageLeft>
            <img src={CellPhone} alt='Cell Phone' />
            <ImageIconCheck>
              <img src={IconCheck} alt='Icon check' />
            </ImageIconCheck>
            <ImageIconNavigate>
              <img src={IconNavigate} alt='Icon Favorite' />
            </ImageIconNavigate>
            <ImageIconFavorite>
              <img src={IconFavorite} alt='Icon navegate' />
            </ImageIconFavorite>
          </ImageLeft>
          <TextRight>
            <Title>
              Abra sua conta <span>gratuita</span>!
            </Title>
            <Description>
              Envie e receba dinheiro de forma mais prática e rápida. Faça Pix,
              TEDs e transferências para todos os bancos sem pagar nada.
            </Description>
            <List>
              {Items.map((item, index) => (
                <ItemList key={index}>
                  <IconBg>
                    <img src={item.image} alt={item.titleFree} />
                  </IconBg>
                  <div>
                    <SubTitle>{item.titleFree}</SubTitle>
                    <Paragraph>{item.text}</Paragraph>
                  </div>
                </ItemList>
              ))}
            </List>
          </TextRight>
        </ContainerCount>
      </ContainerGrid>
    </>
  )
}

export default OpenCountFree
