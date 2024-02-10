import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div``;

export const BestRatedContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 91rem;

  h2 {
    font-weight: 600;
    font-size: 4rem;
    margin-block: 10rem;
  }

  a {
    width: 35.3rem;
    height: 8.6rem;
    
    background-color: ${(props) => props.theme.colors.yellow1};
    box-shadow: 0 .4rem .4rem rgba(0, 0, 0, 0.25);
    margin-block: 7.3rem;

    border-radius: 12.8rem;
    text-decoration: none;

    font-size: 2rem;
    font-weight: 700;
    color: #1E1E1E;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BestRatedContent = styled.div`
  display: flex;
  column-gap: 6rem;
  justify-content: center;
`;