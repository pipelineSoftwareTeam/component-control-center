// Asset Imports
import { HiHome } from 'react-icons/hi';
import { BsFillGrid3X3GapFill, BsDatabaseFillAdd } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { FaCube } from 'react-icons/fa';

const links = [
	{
		id: 1,
		page: 'Dashboard',
		path: '/',
		icon: <HiHome />,
	},
	{
		id: 2,
		page: 'Machines',
		path: '/machines',
		icon: <BsFillGrid3X3GapFill />,
	},
	{
		id: 3,
		page: 'Components',
		path: '/components',
		icon: <FaCube />,
	},
	{
		id: 4,
		page: 'Add New Component',
		path: '/add-component',
		icon: <BsDatabaseFillAdd />,
	},
	{
		id: 5,
		page: 'Settings',
		path: '/settings',
		icon: <IoMdSettings />,
	},
];

export default links;
