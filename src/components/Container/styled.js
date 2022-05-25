import styled from 'styled-components'

export const ContainerGeneral = styled.div`
  align-items: ${ props => props.align ? props.align : 'center'};
  background-color: ${props => props.color? props.color : 'white'};
  flex-direction: ${props => props.column? 'column' : 'row'};
  display: flex;
  justify-content: ${props => props.justify? props.justify : 'space-around'};
  width: ${props => props.width? props.width : '100%'};
  height: ${props => props.height? props.height : '100px'};
  border-radius: 5px;
  font-size: ${props => props.size ? props.size : '16px'}
`