import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import LoadingPage from '../pages/LoadingPage';
import ScrollToTop from '../utils/ScrollToTop/ScrollToTop';
// import Result from '../pages/Result'

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
                {/* <Route path="/market" element={<About />} /> */}
                {/* <Route path="/result" element={<Result />} /> */}
                <Route path="/loading" element={<LoadingPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;