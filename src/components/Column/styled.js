import styled from "styled-components"

export const ColumnContainer = styled.div `
  width: 20%;
  background-color: ${props => props.color ? props.color : '#26cbdf'};
  height: ${props => props.height ? props.height : '690px'}
`