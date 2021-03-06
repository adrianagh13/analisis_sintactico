import React from 'react'
import { ContainerGeneral } from './styled'

export const Container = ({children, height, width, justify, column, align, padding, color, size}) => {

  return (
    <ContainerGeneral 
      width={width} 
      height={height} 
      justify={justify} 
      column={column} 
      align={align}
      padding={padding}
      color={color}
      size={size}
    >
      {children}
    </ContainerGeneral>
  )
}