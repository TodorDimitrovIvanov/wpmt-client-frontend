import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Domain from "../../pages/Domain/Domain";

const Router: React.FunctionComponent =() => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Dashboard/>}/>
                <Route path={'/domain'} element={<Domain/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
