import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Error404 from './pages/Error404/Error404';
import SwitchUsers from './pages/SwitchUsers/SwitchUsers';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import NavIcons from './components/NavIcons/NavIcons';

function App() {
    return (
        <div className="App">
            <Header />
            <NavIcons />
            {/* <ProfilePage /> */}
            {/* <Route path="/" element={<Navigate to="/home" />} /> */}
            <Routes>
                <Route path="/" element={<SwitchUsers />} />
                {/* <Route path="/profile" element={<ProfilePage />} /> */}
                <Route path="/user/:id" element={<ProfilePage />} />
                <Route path="*" element={<Error404 />} />
            </Routes>

            {/* <Route path="/" element={<Navigate to="/home" />} /> */}
            {/* <Routes>
                <Route path="/user/:id" element={<ProfilePage />} />
            </Routes> */}
        </div>
    );
}

export default App;
