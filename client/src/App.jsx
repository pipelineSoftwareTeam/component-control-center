// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Component Imports
import { Landing, NotFound } from './pages';

function App() {
  return (
    <Routes>
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
