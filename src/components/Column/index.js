import React from "react";
import { ColumnContainer } from "./styled";

export const Column = ({color, height, opacity}) => {
  return (
    <ColumnContainer
      color={color}
      height={height}
      opacity={opacity}
    >
    </ColumnContainer>
  )
}
