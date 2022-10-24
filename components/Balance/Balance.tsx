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
  } button{
    margin-right: 1px;
    border-radius: 2px;
    background-color: #242424;
    border: none;
  }
`
export default function Balance() {
  const [show, setShow] = useState<boolean>(false);

  
  return (
    <BalanceContainer>
      <div>Saldo</div>
      <div>
            {show? <strong>{new Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(190000)}</strong>:<strong>R$******,**</strong>}
            <button onClick={()=> setShow(!show)}>{show? <VisibilityOffIcon/>:<VisibilityIcon/> }</button>
            
      </div>
    </BalanceContainer>
  )
}
