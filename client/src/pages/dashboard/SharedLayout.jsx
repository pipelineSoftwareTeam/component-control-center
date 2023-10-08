// React Imports
import { Outlet } from 'react-router-dom';

// Component Imports
import Navbar from './Navbar';

function SharedLayout() {
	return (
		<main>
			<Navbar />
			<section>
				<Outlet />
			</section>
		</main>
	);
}
export default SharedLayout;
