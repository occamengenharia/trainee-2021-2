import styled from "styled-components";
import {Link} from 'react-router-dom'; 

export const Title = styled.h1`
    font-size: 72px;
    color: #5E5E5E;
    
`
export const Page = styled.div`
    
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
export const SubTitle = styled.h2`
    color: #5E5E5E;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
export const Button = styled(Link)`
    background-color: #B47AEA;
    color: white;
    text-decoration: none;
    border-radius: 15px;
    font-weight: bold;
    font-size: 24px;
    width: 144px;
    height: 45px;
    margin: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`