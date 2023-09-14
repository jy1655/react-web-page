import React from 'react';
import { Route, Routes } from "react-router-dom";
import Masthead from './masthead';
import Download_page from './Downloadpage';
import About from './About';


const Router = () => {
    return (
        <div>    
            <Routes>
            <Route path="/" element={<Masthead />}/>
            <Route path='/downloadpage' element={<Download_page />} />
            <Route path='/about' element={<About />} />
        
            </Routes>
        </div>
    );
}

export default Router;