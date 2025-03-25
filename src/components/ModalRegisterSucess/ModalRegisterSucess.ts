import styled from "styled-components";


export const Container = styled.div`
    position: relative;
    position: fixed;
    width: 90vw;
    max-width: 600px;
    height: 258px;
    border-top: 10px solid #FAA613;
    box-shadow: 1px 1px 10px 0px silver;
    border-radius: 25.93px;
    z-index: 1000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Img = styled.img`
    margin-bottom: 10px;
`

export const Msg = styled.h1`
font-weight: 500;
font-size: 24px;
text-align: center;

`

export const Text = styled.text`
font-weight: 400;
font-size: 20px;
text-align: left;
margin: 0 42px;
margin-top: 30px;
`