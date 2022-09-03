import React, { useEffect, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Domain from "./pages/Domain/Domain";
import Wordpress from "./pages/Wordpress/Wordpress";
import Backup from "./pages/Backup/Backup";
import Transfer from "./pages/Transfer/Transfer";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { userLogin } from "./slices/userSlice";
import { selectSite } from "./slices/websiteSlice";

const Router: React.FunctionComponent = () => {

    const dispatch = useAppDispatch();
    const websiteRequestStatus = useAppSelector(state => state.user.status);
    const isLogged = useAppSelector(state => state.user.current.isLogged);

    useMemo(() => {

        if (websiteRequestStatus === 'idle' && !isLogged) {
            dispatch(userLogin());
        } else {
            dispatch(selectSite());
        }

    }, [ ]);

    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path={'/'} element={<Dashboard/>}/>
                <Route path={'/domain'} element={<Domain/>}/>
                <Route path={'/wordpress'} element={<Wordpress/>}/>
                <Route path={'/backup'} element={<Backup/>}/>
                <Route path={'/transfer'} element={<Transfer/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
