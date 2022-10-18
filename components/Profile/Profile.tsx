import React from 'react'
import styled from '@emotion/styled';
import { Avatar } from '@mui/material';

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f8f8f8;
    font-family: sans-serif;
    font-size: 0.8em;
    line-height: 2px;
    background-color: #242424;
    width: 100%;
    height: 450px;
    padding: 2%;
`;
const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;



export default function Profile() {
  return (
    <ProfileContainer>
        <AvatarContainer>
            <Avatar alt='Amanda Lima' src='https://avatars.githubusercontent.com/u/77978576?v=4' sx={{width:100, height:100}} />
                <h2>Amanda Lima</h2>
                <h4>Full Stack developer</h4>
        </AvatarContainer>
    </ProfileContainer>
  )
}
