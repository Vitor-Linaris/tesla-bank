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
            <HeaderItemLink>Conta digital</HeaderItemLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderItemLink>Suporte</HeaderItemLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderItemLink>Blog</HeaderItemLink>
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
