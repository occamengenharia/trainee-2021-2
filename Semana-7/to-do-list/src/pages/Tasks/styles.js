import styled from 'styled-components';

export const Title = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    color: #5e5e5e;
    margin-bottom: 80px;
`

export const Page = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const Texto = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #5E5E5E;
`

export const FieldInput = styled.div`
display: flex;
align-items: center;
margin-bottom: 24px;
    > input {
        border: 0;
        background: 0;
        outline: 0;
        &, &::placeholder{
            color: #b47aea;
            font-size: 24px;
            font-weight: bold;
        }        
    }
    > svg {
            color: #b47aea;
            font-size: 24px;
        }

`

export const FieldInputCheck = styled.label`
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 16px;
    position: relative;
    > svg{
        font-size: 24px;
        margin-bottom: 6px;
        color: #5E5E5E;
    }
    > label{
        > span{ 
            position: absolute;
            top: 2px;
            left: 33px;
            background: white;
            border: solid 2px #1E9CEA;
            border-radius: 4px;
            height: 20px;
            width: 20px;
            &:after{
                z-index:2;
                content:"";
                position: absolute;
                left: 6px;
                top: 3px;
                width: 4px;
                height: 8px;
                border: solid 1px white;
                border-width: 0 4px 4px 0;
                border-radius: 3px;
                transform: rotate(45deg);
            }
        }
        input:checked ~ span{
            background: #1E9CEA;
        }
    }

`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 720px;
    gap: 12px;
`