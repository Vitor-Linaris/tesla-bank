import CustomButton from '../Custom-button/Custom-button.component'
import {
  BtnLink,
  HeaderButtons,
  HeaderContainer,
  HeaderItem,
  HeaderItemLink,
  HeaderItems,
  HeaderTitle
} from './Header.styles'

import arrowDropDown from '../../assets/arrow-drop-down-line.svg'

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>teslabank.</HeaderTitle>
        <HeaderItems>
          <HeaderItem>
            <HeaderItemLink>Benefícios</HeaderItemLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderItemLink>
              Conta digital
              <img src={arrowDropDown} alt='Icon arrow drop down' />
            </HeaderItemLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderItemLink>Suporte</HeaderItemLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderItemLink>
              Blog
              <img src={arrowDropDown} alt='Icon arrow drop down' />
            </HeaderItemLink>
          </HeaderItem>
        </HeaderItems>
        <HeaderButtons>
          <BtnLink>Entrar</BtnLink>
          <CustomButton color='primary'>Abrir conta</CustomButton>
        </HeaderButtons>
      </HeaderContainer>
    </>
  )
}

export default Header
