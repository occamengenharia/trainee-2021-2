import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Title = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    color: #5e5e5e;
`

export const Page = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ButtonLink = styled(Link)`
    text-decoration: none;
    background: #B47AEA;
    border-radius: 15px;
    color: #FFFFFF; 
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    margin-top: 40px;
    padding: 8px 16px;
`

export const Texto = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #5E5E5E;
`
