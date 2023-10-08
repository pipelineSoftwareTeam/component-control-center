// React Imports
import Wrapper from '../assets/wrappers/NotFound';
import { Link } from 'react-router-dom';

// Asset Imports
import notFound from '../assets/images/not-found.svg';

function NotFound() {
	return (
		<Wrapper className='full-page-centre'>
			<img src={notFound} alt='not-found' className='main-img' />
			<Link to='/landing'>
				<button>Go Home</button>
			</Link>
		</Wrapper>
	);
}
export default NotFound;
