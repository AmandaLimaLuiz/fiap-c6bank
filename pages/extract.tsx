import React from "react";
import SideBar from "../components/SideBar";
import styled from '@emotion/styled';

const ExtractContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`

export default function Extract(){
    return(
        <ExtractContainer>
            <SideBar/>
            <section>
                <h1>Extract</h1>
                Aqui virá a lista de extrato
            </section>
        </ExtractContainer>
    )
}

