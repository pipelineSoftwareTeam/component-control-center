// React Imports
import Wrapper from '../../assets/wrappers/Navbar';
import { NavLink, Link } from 'react-router-dom';

// Asset Imports
import links from '../../utils/NavData';
import { FiLogOut } from 'react-icons/fi';

function Navbar() {
	return (
		<Wrapper>
			<Link to='/settings' className='link'>
				<div className='logo'>
					<h1>C3</h1>
				</div>
			</Link>
			<div className='navigation'>
				{links.map((link) => {
					return (
						<NavLink to={link.path} key={link.id} className='link route'>
							<div>
								{link.icon}
								<p>{link.page}</p>
							</div>
						</NavLink>
					);
				})}
			</div>
			<div className='nav-end'>
				<div className='user'>
					<p>Oliver Jones</p>
					<p>CNC Programmer</p>
				</div>
				<Link to='/landing' className='link logout'>
					<FiLogOut />
				</Link>
			</div>
		</Wrapper>
	);
}
export default Navbar;
