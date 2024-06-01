import styled from 'styled-components';

export const Container = styled.div`
	max-width: 61.8rem;
	width: 100%;
	height: 22.7rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 2rem;
	border-radius: 2rem;
	box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
`;

export const Image = styled.img`
	width: 19rem;
	height: 19rem;

	border-radius: 19rem;
  box-shadow: 0px 3.316666603088379px 9.94999885559082px 2.211111068725586px #00000040;
`;

export const InfoContainer = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
	height: 200px;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 2rem;
  width: 190px;

  h3 {
    font-weight: 700;
    width: 100%;
    margin-bottom: 80px;
  }



  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    width: 50%;
    span {
      font-weight: 700;
    }
  }

  p {
    font-weight: 500;
  }

  a {
    font-size: 2.4rem;
    font-weight: 700;

    background-color: ${props => props.theme.colors.primary};
    width: 17rem;
    height: 5.3rem;
    border-radius: 5rem;
    box-shadow: 0 .4rem .4rem rgba(0, 0, 0, 0.25);
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const InfoContent2 = styled(InfoContent)`
  align-items: center;
  div {
    margin-bottom: 50px;
  }
`