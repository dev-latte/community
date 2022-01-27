import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Main from "./Main";

const AppRouter = ({isLoggedIn}) => {
    console.log(isLoggedIn);
    return (
        <>
        { isLoggedIn &&
            <>
            <Header/>
            <Routes>
                    <Route path="/" element={<Main />}/>
            </Routes>
            </>  
        }
        </>
    );
}

export default AppRouter;