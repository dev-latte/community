import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Main from "./Main";
import More from "./More";

const AppRouter = ({userObj, isLoggedIn}) => {
    console.log(isLoggedIn);
    return (
        <>
        { isLoggedIn &&
            <>
            <Header userObj={userObj}/>
            <Routes>
                    <Route path="/" element={<Main userObj={userObj}/>}/>
            </Routes>
            </>  
        }
        </>
    );
}

export default AppRouter;