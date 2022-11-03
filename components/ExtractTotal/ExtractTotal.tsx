import styled from '@emotion/styled'
import React from 'react'


export default function ExtractTotal() {

  const ExtractContainer = styled.div`
    display: flex;
    width: 100%;
    font-size: 40px;
    margin-left: 18px;
    background-color: rgba(91, 90, 90, 0.7);
    max-width: 1000px;
    border-radius: 10px;
    padding: 2px;
    padding-left: 12px;
`


  return (
    <ExtractContainer>Transações 
    </ExtractContainer>
    
  )
}
