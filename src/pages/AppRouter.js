import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation"
import Main from "./Main";

const AppRouter = ({isLoggedIn}) => {
    console.log(isLoggedIn);
    return (
        <>
        { isLoggedIn &&
            <>
            <Header/>
            <Navigation></Navigation>
            <Routes>
                    <Route path="/" element={<Main />}/>
            </Routes>
            </>  
        }
        </>
    );
}

export default AppRouter;