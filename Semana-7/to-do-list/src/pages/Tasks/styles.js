import styled from "styled-components";


export const Title = styled.h1`
    font-size: 64px;
    color: #5E5E5E;
    text-align: center;
    margin-bottom: 80px;
`
export const Input = styled.div`
    display: flex;
    align-items: center;
    > input{
        border: 0;
        background: 0;
        color: #B47AEA;
        outline: 0;
        &, &::placeholder{
            color: #B47AEA;
            font-size: 24px;
            font-weight: bold;
        }
    } 
    > svg{
        color: #B47AEA;
        font-size: 24px;
    }


`
export const Inputcheck = styled.label`
    display: flex;
    align-items: center; 
    color: #B47AEA;
    font-size: 24px;
    font-weight: bold;
    gap: 16px;
    position: relative;
    > span{
        position: absolute;
        background: white;
        height:20px;
        width: 20px;
        top: 0;
        left: 0;
        border: solid 2px #1E9CEA;
        box-sizing: border-box;
        border-radius: 5px;
        &::after{
            z-index: 2;
            content: '';
            position: absolute;
            top: 2px;
            left: 5px;
            width: 6px;
            height: 10px;
            border: solid 1px white;
            border-width: 0 3px 3px 0;
            transform: rotate(45deg);
        }
        
    }
    input:checked ~span{
        background-color: #1E9CEA;
    }

`
export const Page = styled.div`
    
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
`

