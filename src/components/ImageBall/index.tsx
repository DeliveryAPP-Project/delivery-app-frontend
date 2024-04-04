import * as styled from './ImageBall.styles';

type IImageBall = {
	src: string;
	size?: 'md' | 'lg' | 'xl';
	text: string;
	shadow?: boolean;
};

export default function ImageBall({
	src,
	size = 'md',
	text,
	shadow = false,
}: IImageBall) {
	return (
		<styled.Container size={size} shadow={shadow}>
			<styled.Content src={src} alt={`Imagem de ${text}`} />
		</styled.Container>
	);
}
