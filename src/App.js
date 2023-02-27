import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Services from './pages/Services';

function App() {
    const location = useLocation();
    const displayServices = location.pathname === '/';

    return (
        <div className="App">
            <Navbar />
            {displayServices ? <Services /> : <Outlet />}
        </div>
    );
}

export default App;
