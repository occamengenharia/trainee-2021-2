import styled from "styled-components";

import { Link } from "react-router-dom";

export const Title = styled.h1`
    font-size: 108px;
    color: #5e5e5e;
    margin-bottom: 80px;
`
export const FieldInput = styled.div`
    display: flex;
    align-items: center;
    
    > input{
        border: none;
        background: none;
        outline: none;

        &, &::placeholder{
            color: #B47AEA;
            font-size: 24px;
            font-weight: bold;
        }
    }
    
    > svg{
        color: #B47AEA;
        font-size: 24px;
        margin: 8px;
    }

`

export const FieldInputCheck = styled.label`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 400;
    align-items: center;
    gap: 16px;
    position: relative;

    > span{
        position: absolute;
        background: white;
        border: solid 2px #1e9cea;
        border-radius: 4px;
        height: 20px;
        width: 20px;
        &:after{
            z-index: 2;
            content: "";
            position: absolute;
            left: 6px;
            top: 2px;

            width: 6px;
            height: 10px;
            border: solid 0px white;
            border-width: 0 3px 3px 0 ;

            transform: rotate(45deg);
        }
    }
    input:checked ~span{
        background: #1e9cea;
    }
    
`

export const Page = styled.div`
    height: 100vh;
    margin: none;
    
    display: flex;
    flex-direction: column;
    align-items: center;

`

