import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavIcons from './components/NavIcons/NavIcons';

function App() {
    return (
        <div className="App">
            <Header />
            <NavIcons />
            <Routes>
                <Route></Route>
                <Route></Route>
            </Routes>
        </div>
    );
}

export default App;
