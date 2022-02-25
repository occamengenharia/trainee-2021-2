import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
    font-family: 'roboto', sans-serif;
    font-size: 72px;
    color: #5E5E5E;
    margin: 0;

`
export const Subtitle = styled.h2`
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    text-align: center;
    color: #5E5E5E;

`


export const ButtonLink = styled(Link)`
    text-decoration: 0;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    font-size: 24pt;
    color: white;
    background: purple;
    border-radius: 15px;
    padding: 8px 16px;
    margin-top: 14px;





`



export const Page = styled.div`
    background: #EEEEEE;
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;






`