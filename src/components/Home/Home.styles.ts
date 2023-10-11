import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div``;

export const BestRatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 910px;

  h2 {
    font-weight: 600;
    font-size: 40px;
    margin-block: 100px;
  }

  a {
    width: 353px;
    height: 86px;
    
    background-color: #FAA613;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-block: 73px;

    border-radius: 128px;
    text-decoration: none;

    font-size: 20px;
    font-weight: 700;
    color: #1E1E1E;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BestRatedContent = styled.div`
  display: flex;
  column-gap: 60px;
  justify-content: center;
`;