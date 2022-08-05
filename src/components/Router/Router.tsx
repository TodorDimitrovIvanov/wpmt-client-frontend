import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Domain from "../../pages/Domain/Domain";
import Wordpress from "../../pages/Wordpress/Wordpress";
import Backup from "../../pages/Backup/Backup";
import Transfer from "../../pages/Transfer/Transfer";

const Router: React.FunctionComponent =() => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Dashboard/>}/>
                <Route path={'/domain'} element={<Domain/>}/>
                <Route path={'/wordpress'} element={<Wordpress/>}/>
                <Route path={'/backup'} element={<Backup/>}/>
                <Route path={'/transfer'} element={<Transfer/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
