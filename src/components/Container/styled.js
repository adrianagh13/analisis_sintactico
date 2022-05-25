import styled from 'styled-components'

export const ContainerGeneral = styled.div`
  align-items: ${ props => props.align ? props.align : 'center'};
  flex-direction: ${props => props.column? 'column' : 'row'};
  display: flex;
  justify-content: ${props => props.justify? props.justify : 'space-around'};
  width: ${props => props.width? props.width : '100%'};
  height: ${props => props.height? props.height : '100px'};
`