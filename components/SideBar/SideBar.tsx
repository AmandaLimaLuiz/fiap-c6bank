import React from 'react'
import styled from '@emotion/styled';
import Balance from '../Balance'
import Menu from '../Menu'
import Profile from '../Profile'

const SideBarContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 360px;
  background-color: #242424;
`

export default function SideBar() {
  return (
    <SideBarContainer>
      <Profile/>
      <Balance/>
      <Menu/>
    </SideBarContainer> 
  )
}