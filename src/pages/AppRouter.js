import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";

const AppRouter = ({userObj, isLoggedIn}) => {
    console.log(isLoggedIn);
    return (
        <Routes>
            { isLoggedIn 
                && <Route path="/" element={<Main userObj={userObj}/>}/>
            }
        </Routes>
    );
}

export default AppRouter;