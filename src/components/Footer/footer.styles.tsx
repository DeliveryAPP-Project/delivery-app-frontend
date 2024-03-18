import styled from "styled-components";

interface PropsFooter {
    marginFooter: number;
}

export const ContainerFooter = styled.section <PropsFooter>`
    width: 101vw;
    height: 288px;
    background-color: #FAA613;
    margin-top: ${(props)=> props.marginFooter}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const TextHamper = styled.h2`
    font-family: "Staatliches", sans-serif;
    font-weight: 400;
    font-size: 142.27px;
    color: #1E1E1E;
    /* border: 1px solid blue; */
    width: 400px;
    height: 178px;
    margin-top: 30px;
`
export const ContainerTextFooter = styled.div`
    width: 1400px;
    height: 100px;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 140px;
`

export const TextFooter = styled.p`
    font-size: 16px;
    font-weight: 700;
    font-family: "Inter", sans-serif
`