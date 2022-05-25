import React from "react";
import { ColumnContainer, TextContainer, Icon, StyledLink } from "./styled";

export const Column = ({color, height, opacity, text, link, source, path, hover}) => {
  return (
    <ColumnContainer
      color={color}
      height={height}
      opacity={opacity}
      hover={hover}
    >
      {link ?
        <TextContainer>
          <StyledLink to={path}>{text}</StyledLink>
          <Icon src={source}/>
        </TextContainer> : null
      }
      
    </ColumnContainer>
  )
}
