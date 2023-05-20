import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
    const location = useLocation();
    const displayServices = location.pathname === '/';

    return (
        <div className="App">
            <Navbar />
            {displayServices ? <Home /> : <Outlet />}
        </div>
    );
}

export default App;
