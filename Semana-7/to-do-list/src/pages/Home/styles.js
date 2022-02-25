import styled from "styled-components";

import { Link } from "react-router-dom";

export const Title = styled.h1`
    font-size: 128px;
    color: #5e5e5e;
`
export const SubTitle = styled.h2`
    font-size: 48px;
    color: #5e5e5e;
`

export const ButtonLink = styled(Link)`
    width: 384px;
    height: 112px;
    background-color: #B47AEA;
    border-radius: 32px;
    margin: 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 56px;
    color: #ffffff;
    `


export const Page = styled.div`
    height: 100vh;
    margin: none;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

