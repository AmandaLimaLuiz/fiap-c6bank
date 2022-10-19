import React from 'react'
import styled from '@emotion/styled';
import Link from 'next/link';

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    background-color: #242424;
    ul{
      width: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      height: 300px;
      overflow-y: auto;
      &::-webkit-scrollbar-thumb{
        background-color: #3d3c3c;
        outline: 1px solid #777777;
        border-radius: 5px;
      }
      &::-webkit-scrollbar{
        width: 6px;
      }
    }li{
      width: 100%;
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
