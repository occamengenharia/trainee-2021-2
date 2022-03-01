import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 64px;
    text-align: center;
    color: #5E5E5E;
    margin-bottom: 80px;

`;

export const FieldInput = styled.div`
   display: flex;
   align-items: center;

   > input{
       border: 0;
       background: 0;
       outline: 0;
       color: #B47AEA;
       ::placeholder{
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

export const FieldInputCheck = styled.label`
   display: flex;
   align-items: center;
   font-size: 24px;
   font-weight: bold;
   gap: 16px;
   position: relative;
   
   
   > span{
       position: absolute;
       background: white;
       border-radius: 4px;
       border: solid 2px #1E9CEA;
       height: 20px;
       width: 20px;
       &:after{
           z-index: 2;
           content: "";
           position: absolute;
           left: 5px;
           top: 2px;
           width: 6px;
           height: 10px;
           border: solid 1px white;
           border-width: 0 3px 3px 0;

           transform: rotate(45deg);
           

       }
    }
    
    input:checked ~ span{
       background: #1E9CEA;
    }
`
export const TaskExec = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    >svg {
        color: #808080;
        font-size: 26px;
    }

`

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    width: 800px;
    gap: 15px;

`  

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;



`