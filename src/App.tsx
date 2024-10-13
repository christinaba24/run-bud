import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
} from 'react-router-dom';
import { ConsolePage } from './pages/ConsolePage';
import SetupPage from './pages/SetupPage';
import './App.scss';

function App() {
    return (
        <Router>
            <div data-component="App">
                <Routes>
                    <Route path="/" element={<SetupPage />} />
                    <Route path="/console" element={<ConsolePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
