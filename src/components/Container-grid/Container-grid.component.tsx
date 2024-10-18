import React, { ButtonHTMLAttributes, FunctionComponent } from 'react'
import { Container } from './Container-grid.styles'

export interface ContainerGridProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const ContainerGrid: FunctionComponent<ContainerGridProps> = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  )
}

export default ContainerGrid
