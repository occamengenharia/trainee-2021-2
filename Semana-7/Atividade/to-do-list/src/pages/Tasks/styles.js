import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 4em;
    margin: 0;
    padding: 0;
    text-align: center;
    color: #5E5E5E;
    margin-top: 27;
    margin-bottom: 80px;
`
export const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const InputTaskField = styled.div`
display: flex;
align-items: center;
    > input{
        border: 0;
        background: 0;
        outline: 0;
        &, &::placeholder{
            color: #B47AEA;
            font-size: 24px;
            font-weight: 700;
        }
    }
    >svg{
        color: #B47AEA;
        font-size: 24px;
        font-weight: 700;
        margin: 5px;
    }
`
export const InputCheckField = styled.label`
        font-size: 24px;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 16px;
        position: relative;
        > span{
            position: absolute;
            background: white;
            border: 1px solid #139cea;
            height: 20px;
            width: 20px;
            border-radius: 4px;
            &:after{
                z-index: 2;
                content:"";
                position: absolute;
                top: 3px;
                left: 6.5px;
                width: 4px;
                height: 8px;
                border: solid 1px white;
                border-width: 0px 3px 3px 0px;

                transform: rotate(45deg);
            }
        }
        input:checked ~span{
            background: #1E9CEA;
        }
`
export const InputDeleteBtn = styled.button`
    border: none;
    float: left;
    margin: 7px;
`