import styled from 'styled-components'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.cores.secundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.cores.principal};
  border: 1px solid #ccc;
  height: 40px;
  font-size: 16px;
`

export const BotaoPesquisar = styled.button`
  background-color: ${(props) => props.theme.cores.principal};
  border: 1px solid ${(props) => props.theme.cores.principal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.cores.secundaria};
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.cores.secundaria};
    color: ${(props) => props.theme.cores.principal};
  }
`
