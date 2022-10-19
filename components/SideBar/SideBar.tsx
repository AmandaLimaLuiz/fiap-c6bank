import React from 'react'
import styled from '@emotion/styled';
import Balance from '../Balance'
import Menu from '../Menu'
import Profile from '../Profile'

const SideBarContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #242424;
  box-shadow: 1px 1px 1px 1px rgba(61, 60, 60, 0.498);
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
