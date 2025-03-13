import { Outlet } from 'react-router-dom';
import * as styled from './Layout.styles';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout() {
	return (
		<>
			<Header />
			<styled.Content>
				<Outlet />
			</styled.Content>
			<Footer Marginfooter={0}/>
		</>
	);
}
