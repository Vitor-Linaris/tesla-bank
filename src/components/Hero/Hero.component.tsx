import CustomButton from '../Custom-button/Custom-button.component'
import {
  Container,
  CreaditCardArea,
  CtaDownload,
  Description,
  DownloadMobile,
  IconBg,
  List,
  ListItem,
  TextArea,
  Title
} from './Hero.styles'

import creditCardBlack from '../../assets/credit-card-black.svg'
import creditCardRed from '../../assets/credit-card-red.svg'
import checkFill from '../../assets/check-fill.svg'
import appleStore from '../../assets/apple-store.svg'
import googlePlay from '../../assets/google-play.svg'
import arrowRight from '../../assets/arrow-right.svg'

const Hero = () => {
  return (
    <>
      <Container>
        <TextArea>
          <Title>
            TeslaBank <br />
            seu banco digital.
          </Title>
          <Description>
            Com TeslaBank, você pode realizar transferências bancárias com zero
            taxa e pagar suas contas.
          </Description>
          <List>
            <ListItem>
              <IconBg>
                <img src={checkFill} alt='' />
              </IconBg>
              Transferência instantânea
            </ListItem>
            <ListItem>
              <IconBg>
                <img src={checkFill} alt='' />
              </IconBg>
              Transferência instantânea
            </ListItem>
            <ListItem>
              <IconBg>
                <img src={checkFill} alt='' />
              </IconBg>
              Transferência instantânea
            </ListItem>
            <ListItem>
              <IconBg>
                <img src={checkFill} alt='' />
              </IconBg>
              Transferência instantânea
            </ListItem>
          </List>
          <CtaDownload>
            <CustomButton color='primary'>
              Abrir uma conta
              <img src={arrowRight} alt='Arrow right' />
            </CustomButton>
            <DownloadMobile>
              <img src={appleStore} alt='Apple Store' />
              <img src={googlePlay} alt='Google Play' />
            </DownloadMobile>
          </CtaDownload>
        </TextArea>
        <CreaditCardArea>
          <img src={creditCardBlack} alt='' />
          <img src={creditCardRed} alt='' />
        </CreaditCardArea>
      </Container>
    </>
  )
}

export default Hero
