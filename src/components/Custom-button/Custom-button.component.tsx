import React, { ButtonHTMLAttributes, FunctionComponent } from 'react'
import { CustomButtonContainer } from './Custom-button.styles'

export interface CustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  color: 'primary' | 'secondary'
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  children,
  color = 'primary'
}) => {
  return (
    <>
      <CustomButtonContainer color={color}>{children}</CustomButtonContainer>
    </>
  )
}

export default CustomButton
