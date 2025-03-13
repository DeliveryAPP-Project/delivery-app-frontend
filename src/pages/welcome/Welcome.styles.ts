import styled from "styled-components";

export const generalContainer = styled.section`
    display: flex;
    width: 100vw;
    height: 100%;
    border: 1px black solid;
    flex-direction: column;
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
    line-height: 100%;
    letter-spacing: 0%;
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

export const containerSection2 = styled.section`
    display: flex;
    width: 100%;
    height: 465px;
    /* border: 1px solid black; */
    background-color: #D9D9D940;
`;

export const containerContentSection2 = styled.div`
    width: 530px;
    height: 321px;
    margin-left: 105px;
    margin-top: 65px;
    /* border: 1px solid red; */
`;

export const container2ContentSection2 = styled.div`
    width: 620px;
    height: 380px;
    /* border: 1px blue solid; */
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 65px;
    margin-left: 90px;
    
`;

export const textSection2 = styled.p`
    font-size: 20px;
    width: 600px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0%;

    >span{
        font-size: 20px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 0%;
    }
`;

export const titleSection2 = styled.h2`
    width: 389px;
    height: 192px;
    font-size: 40px;
    font-weight: 600;
    line-height: 100%;
`;

export const buttonCadrastNow = styled.button`
    width: 530px;
    height: 53px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    background-color: #FAA613;
    color: #000000;
    font-size: 24px;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 0%;
    margin-top: 70px;
`;

export const containerSection3 = styled.section`
    border: 1px solid blueviolet;
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: space-around;
`;

export const containerContent3 = styled.div`
    border: 1px solid red;
    width: 242px;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const circle = styled.div`
    width: 100px;
    height: 100px;
    background-color: #D9D9D9;
    border-radius: 50%;
    border: 1px solid blueviolet;
    
`;

export const titleSection3 = styled.h3`
    width: 242px;
    height: 72px;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 0%;
    color: #1E1E1E;
    border: 1px solid blueviolet;
`;

export const title2Section3 = styled(titleSection3)`
    width: 242px;
    height: 108px;
`;

export const textSection3 = styled.p`
    font-size: 20px;
    line-height: 36px;
    letter-spacing: 0%;
    color: #000000;
    border: 1px solid blueviolet;
`;