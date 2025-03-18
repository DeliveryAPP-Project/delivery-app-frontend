import styled from "styled-components";

export const generalContainer = styled.section`
    display: flex;
    width: 100vw;
    height: 100%;
    flex-direction: column;
`;

export const containerSection1 = styled.section`
    height: 566px;
    width: 100%;
    display: flex;
`;
export const containerContent = styled.div`
    width: 776px;
    height: 100%;
    display: flex;
    align-items: center;

`;
export const containerText = styled.div`
    width: 542px;
    height: 468px;
    margin: 114px;
    margin-left: 106px;
`;

export const titleWelcome = styled.h1`
    width: 542px;
    height: 308px;
    font-size: 64px;
    font-weight: 700;
    line-height: 116%;
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
    line-height: 150%;
`;
export const imageWelcome = styled(containerContent)`
    background-color:  #D9D9D940;
`;

export const containerSection2 = styled.section`
    display: flex;
    width: 100%;
    height: 465px;
    background-color: #D9D9D940;
`;

export const containerContentSection2 = styled.div`
    width: 530px;
    height: 321px;
    margin-left: 105px;
    margin-top: 65px;
`;

export const container2ContentSection2 = styled.div`
    width: 620px;
    height: 380px;
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
    line-height: 116%;
    letter-spacing: 0%;
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
    margin-top: 76px;
`;

export const containerSection3 = styled.section`
    width: 100%;
    height: 700px;
    display: flex;
    gap: 200px;
`;

export const containerCard = styled.div`
    height: 300px;
    width: 1000px;
    display: flex;
    gap: 220px;
    margin-top: 50px;
    margin-left: 106px;
`;

export const Card = styled.div`
    width: 242px;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: auto;
`;

export const circle = styled.div`
    width: 100px;
    height: 100px;
    background-color: #D9D9D9;
    border-radius: 50%;
    margin-bottom: 15px;
    margin-right: 50px;
`;

export const titleSection3 = styled.h3`
    width: 242px;
    height: 72px;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 0%;
    color: #1E1E1E;
    margin-bottom: 40px;
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
    margin-bottom: 16px;
`;

export const containerSection4 = styled.section`
    width: 100%;
    height: 320px;
    display: flex;
    align-items: center;
    background-color: #D9D9D940;
`;

export const containerContentSection4 = styled.div`
    width: 529px;
    height: 196px;
    margin-left: 750px;
`;

export const titleSection4 = styled.h2`
    width: 529px;
    height: 95px;
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    line-height: 116%;
    letter-spacing: 0%;
    color: #1E1E1E;
`;

export const buttonCadrastNow2 = styled(buttonCadrastNow)`
    margin-top: 45px;
`;