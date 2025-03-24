import { ComponentProps } from 'react';
import styled from 'styled-components';


export const CardMain=styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
   
`
export const CardRegistration = styled.div`
    display:flex;
    justify-content:space-around;
    align-items: center;
    flex-direction: column;
    margin-top:9.5rem;
    margin-bottom: 9.5rem;
    width:960px;
    min-height: 87.8125rem;
    border: 1px solid black;
    border-radius: 1.4956rem;

    h2{
    font-size:40px;
    }

   
    
       

`
export const HeaderCardRegistration=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 120px;
    justify-content: space-around;
    
`

export const Progression=styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    img{
        width: 789px;
        heigth:25px;
        align-self: center;    
    }

    
   
    
`
export const Description= styled.div`
        display:flex;
        font-size:12px;
        width: 100%;
        justify-content: space-evenly;


        span{
        width:160px;
        text-align:center;
        }

        .CompletedSpan{
         text-align: right;
         padding-right:40px;
        }
`
export const FontWeightStep=styled.span`
    font-weight:700;


`
