import React from 'react'
import styled from '@emotion/styled';
import Link from 'next/link';

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    background-color: #242424;
    ul{
      margin: 0;
      padding: 0;
    }li{
      list-style: none;
      display: flex;
      line-height: 60px;
      padding-left: 5%;
        &:hover{
        border-top-right-radius: 10%;
        background-color: #333;
        border-left: 5px solid #ffef0d;
        cursor: pointer;      
        }
      }
`

export default function Menu() {
  return (
    <MenuContainer>
      <ul>
        <li><Link href={'#'}>{/*icon */}<a>Início</a></Link></li>
        <li><Link href={'#'}>Extrato</Link></li>
        <li><Link href={'#'}>Trasferência</Link></li>
        <li><Link href={'#'}>Pagamentos</Link></li>
        <li><Link href={'#'}>Cartões</Link></li>
        <li><Link href={'#'}>Crédito</Link></li>
      </ul>
    </MenuContainer>
  )
}
