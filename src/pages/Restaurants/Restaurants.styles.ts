import styled from 'styled-components';

export const Content = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;

  margin-top: 10rem;
  margin-bottom: 30px;
`;

export const FormSearch = styled.form`
	display: flex;
	align-items: center;
  column-gap: 1.2rem;

	border-radius: 5rem;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, .25);

  height: 4.6rem;
  width: 35.4rem;
  padding-inline: 1.5rem;

  margin-bottom: 8rem;
`;

export const IconSearch = styled.button`
	background: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputSearch = styled.input`
	border: none;
	outline: none;
	background-color: inherit;
  width: 100%;
  height: 100%;

  font-size: 1.8rem;

  &::placeholder {
    font-weight: 700;
  }
`;
