import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";

const AppRouter = ({userObj, isLoggedIn, refreshUser}) => {
    return (
        <Routes>
            { isLoggedIn && 
                <Route path="/" element={ <LoginPage/>}/> 
            }
        </Routes>
    );
}

export default AppRouter;