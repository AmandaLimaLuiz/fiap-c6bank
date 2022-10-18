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
            <Avatar alt='Amanda Lima' src='https://media-exp1.licdn.com/dms/image/D4D03AQHeUqjaGcftCQ/profile-displayphoto-shrink_400_400/0/1661459350012?e=1671667200&v=beta&t=ZEQftEEEGLEoUflmRmKb5v3q5VVqQF7-C6pPg41Q08k' sx={{width:100, height:100}} />
                <h2>Amanda Lima</h2>
                <h4>Full Stack developer</h4>
        </AvatarContainer>
    </ProfileContainer>
  )
}
