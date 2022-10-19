import React, { useState } from 'react'
import styled from '@emotion/styled';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const BalanceContainer = styled.div`
  width: 100%;
  color: #f8f8f8;
  background-color: #242424;
  padding-left: 15px;
  & > div > strong{
    font-size: 1.3rem;
    margin-right: 10%;
  }
`
export default function Balance() {
  const [show, setShow] = useState<boolean>(false);
  const ocultar= VisibilityOffIcon ;
  const mostrar = VisibilityIcon;
  
  return (
    <BalanceContainer>
      <div>Saldo</div>
      <div>
            {show? <strong>{new Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(190000)}</strong>:<strong>R$******,**</strong>}
            <button onClick={()=> setShow(!show)}>{show?'ocultar' : 'mostrar'}</button>
            
      </div>
    </BalanceContainer>
  )
}
