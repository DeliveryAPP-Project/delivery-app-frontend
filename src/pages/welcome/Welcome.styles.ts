import styled from "styled-components";

export const generalContainer = styled.section`
    display: flex;
    width: 100;
    height: 100vh;
    /* border: 1px black solid; */
`;

export const containerSection1 = styled.section`
    height: 566px;
    width: 100%;
    /* border: 1px red solid; */
    display: flex;
`;
export const containerContent = styled.div`
    width: 776px;
    height: 100%;
    /* border: 1px blue solid; */
    display: flex;
    align-items: center;

`;
export const containerText = styled.div`
    width: 542px;
    height: 468px;
    margin: 114px;
    margin-left: 106px;
    /* border: 1px yellow solid; */
`;

export const titleWelcome = styled.h1`
    width: 542px;
    height: 308px;
    font-size: 64px;
    font-weight: 700;
    color: #1E1E1E;
`;

export const text1Welcome = styled.p`
    width: 542px;
    height: 144px;
    font-size: 24px;
    font-weight: 600;
    color: #1E1E1E;
    margin-top: 42px;
`;
export const imageWelcome = styled(containerContent)`
    background-color:  #D9D9D940;
`;