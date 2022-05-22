import styled from "styled-components"

export const ColumnContainer = styled.div `
  display: flex;
  width: 20%;
  background-color: ${props => props.color ? props.color : '#26cbdf'};
  height: ${props => props.height ? props.height : '690px'}
`

export const StyledAnchor = styled.a `
  text-decoration: none;
  font-size: 28px;
  color: black;
  text-align: center;
  width: 80%;
`

export const TextContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

export const Icon = styled.img `

`