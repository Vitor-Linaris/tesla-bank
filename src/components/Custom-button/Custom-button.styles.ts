import styled, { css } from 'styled-components'
import Colors from '../../theme/theme.color'
import { CustomButtonProps } from './Custom-button.component'

export const CustomButtonContainer = styled.button<CustomButtonProps>`
  width: 100%;
  max-width: 144px;
  ${(props) => props.color && COLOR[props.color]}
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 18px;
  font-weight: 500;
  line-height: 100%; /* 18px */
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
  }
`

export const COLOR = {
  primary: css`
    background-color: ${Colors.brand.brandColorRed};
    border: none;
    color: ${Colors.neutra.white};

    &:hover {
      background-color: ${Colors.brand.brandColorRedDark};
    }
  `,
  secondary: css`
    background-color: ${Colors.neutra.white};
    border: 2px solid #e8e8e8;
    color: ${Colors.neutra.dark};
  `
}
