import styled from 'styled-components'

export const CabecalhoEstilizado = styled.header`
  background-color: ${(props) => props.theme.cores.secundaria};
  color: ${(props) => props.theme.cores.principal};
  text-align: center;
  padding: ${(props) => props.theme.espacamentos.grande} 0;
`
