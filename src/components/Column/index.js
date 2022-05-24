import React from "react";
import { ColumnContainer, StyledAnchor, TextContainer, Icon } from "./styled";

export const Column = ({color, height, opacity, text, anchor, source}) => {
  return (
    <ColumnContainer
      color={color}
      height={height}
      opacity={opacity}
    >
      {anchor ?
        <TextContainer>
          <StyledAnchor href="">
            {text}
          </StyledAnchor> 
          <Icon src={source}/>
        </TextContainer> : null
      }
      
    </ColumnContainer>
  )
}
