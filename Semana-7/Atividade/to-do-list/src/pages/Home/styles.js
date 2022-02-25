import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import { }

export const Title = styled.h1`
    font-size: 4em;
    margin: 0;
    padding: 0;
`
export const Subtitle = styled.h2`
    font-size: 1em;
    margin: 0;
    padding: 0;
`

export const Button = styled(Link)`
    width: 144px;
    height: 45px;
    border-radius: 15px;
    margin: 20px;
    background: #B47AEA;
    border: none;
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.5em;
    color: white;
    line-height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
`

export const Page = styled.div`
    color: #5e5e5e;
    height: 97.5vh;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
` 