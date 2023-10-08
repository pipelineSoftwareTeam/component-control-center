// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Component Imports
import { Landing, NotFound } from './pages';;
import {
	SharedLayout,
	Dashboard,
	Machines,
	Components,
	AddComponent,
	Settings,
} from './pages/dashboard';

function App() {
	return (
		<Routes>
			<Route path='/' element={<SharedLayout />}>
				<Route index element={<Dashboard />} />
				<Route index path='/machines' element={<Machines />} />
				<Route index path='/components' element={<Components />} />
				<Route index path='/add-component' element={<AddComponent />} />
				<Route index path='/settings' element={<Settings />} />
			</Route>
			<Route exact path='/landing' element={<Landing />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

function WrappedApp() {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
}

export default WrappedApp;
