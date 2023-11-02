import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import LoadingPage from '../pages/LoadingPage';
import ScrollToTop from '../utils/ScrollToTop/ScrollToTop';
import ResultPage from '../pages/ResultPage'

import '../styles/App.css';
import AboutPage from './AboutPage/index';
import LabPage from './Labpage';

function App() {

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<AboutPage />} />
                <Route path="/lab" element={<LabPage />} />
                <Route path="/market" element={<AboutPage />} />
                <Route path="/result" element={<ResultPage />} />
                <Route path="/loading" element={<LoadingPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;