import { Box, Container, createTheme, CssBaseline, TextField, ThemeProvider, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react'

type CopyProps = {
  site: string;
  sx?: object;
}

function Copyright(props:CopyProps){
  return (
    <Typography>
      {'Copyright ©'}
      <Link color='inherit' href="https://www.avanade.com.br/">{props.site}</Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme();

export default function LoginPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline/>
        <Box sx={{mt:8, display: 'flex', flexDirection:'column', alignItens:'center'}}>
          <Typography component='h1' variant='h5'>
            Login
          </Typography>
          <Box component='form' onSubmit={(e)=>{console.log('enviou')}}>
            <TextField margin='normal' required fullWidth id='email' label='Digite o email' name='email' autoComplete='email' autoFocus/>
            <TextField margin='normal' required fullWidth id='password' type='password' label='Digite a sua senha' name='password' autoComplete='current-password' autoFocus/>
          </Box>
        </Box>
        <Copyright site='www.avanade.com.br' sx={{mt:8, mb:4}}></Copyright>
      </Container>
    </ThemeProvider>
  )
}
