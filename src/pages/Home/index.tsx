import Banner from '../../components/Banner';
import BestRated from '../../components/BestRated';

import logo from '../../assets/logo.svg';
import bannerImg from '../../assets/pizza-image.png';
import Footer from '../../components/Footer';

const bannerHomeInfo = {
	logo: logo,
	description:
		'Facilitamos sua busca pelo restaurante ideal. Com mais de 1000 estabelecimentos cadastrados, ofertamos uma ampla quantidade de opções',
	link: 'restaurantes',
	bgImg: bannerImg,
};

export default function Home() {
	return (
		<>
			<Banner info={bannerHomeInfo} />
			<BestRated />
			<Footer Marginfooter={1962}/>
		</>
	);
}
