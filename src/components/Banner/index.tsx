import * as styled from './Banner.styles';

export default function Banner({ info }: IBanner) {
	return (
		<styled.Container>
			<styled.Content src={info.bgImg}>
				<styled.TextContainer>
					{info.title && <h1>{info.title}</h1>}
					{info.logo && <img src={info.logo} alt='Nome HAMPER' />}

					{info.logo ? (
						<styled.Description>
							{info.description}
						</styled.Description>
					) : (
						<styled.Description size='small'>{info.description}</styled.Description>
					)}

					{info.link && (
						<styled.ButtonLink to={info.link}>Restaurantes</styled.ButtonLink>
					)}
				</styled.TextContainer>
			</styled.Content>
		</styled.Container>
	);
}
