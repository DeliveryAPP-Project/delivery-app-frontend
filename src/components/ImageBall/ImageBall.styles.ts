import styled from 'styled-components';

type Icontainer = {
	size: 'md' | 'lg' | 'xl';
	shadow: boolean;
};

export const Container = styled.div<Icontainer>`
	width: ${(props) => props.size === 'md' && '19rem'};
	height: ${(props) => props.size === 'md' && '19rem'};

	width: ${(props) => props.size === 'lg' && '19.6rem'};
	height: ${(props) => props.size === 'lg' && '19.6rem'};

	width: ${(props) => props.size === 'xl' && '35rem'};
	height: ${(props) => props.size === 'xl' && '35rem'};

	border-radius: ${(props) => props.size === 'md' && '19rem'};
	border-radius: ${(props) => props.size === 'lg' && '19.6rem'};
	border-radius: ${(props) => props.size === 'xl' && '35rem'};

	box-shadow: ${(props) =>
		props.shadow &&
		'0px 3.316666603088379px 9.94999885559082px 2.211111068725586px #00000040'};
	overflow: hidden;
`;

export const Content = styled.img`
	width: 100%;
	height: 100%;
`;
