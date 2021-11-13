// import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
// import NavIcons from './components/NavIcons/NavIcons';
// import Error404 from './pages/Error404/Error404';
import UserPage from './pages/UserPage/UserPage';

function App() {
    return (
        <div className="App">
            <Header />
            {/* <NavIcons /> */}
            <UserPage />
            {/* <Route path="/" element={<Navigate to="/home" />} /> */}
            {/* <Routes>
                <Route path="/user/:id" element={<UserPage />} />
                <Route path="*" element={<Error404 />} />
            </Routes> */}

            {/* <Route path="/" element={<Navigate to="/home" />} /> */}
            {/* <Routes>
                <Route path="/user/:id" element={<UserPage />} />
                <Route path="*" element={<Error404 />} />
            </Routes> */}
        </div>
    );
}

export default App;
