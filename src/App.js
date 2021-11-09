import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route></Route>
                <Route></Route>
            </Routes>
        </div>
    );
}

export default App;
