import React from "react";

const Main = ({ userObj }) => {
    return (
        <>
            로그인했습니다 따란
            {userObj.screenName}    
        </>
    );
}

export default Main;