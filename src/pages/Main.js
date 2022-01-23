import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../FirebaseInstance";

import Button from "../components/common/Button";
import PageTemplate from "../components/common/PageTemplate";

const Main = ({ userObj }) => {
    const twitterSignOut = () => {
        signOut(auth).then(() => {
            console.log("로그아웃");
            window.location.replace("/");
          }).catch((error) => {
              console.error(`signOut error ${error}`);
          });          
    }

    return (
        <PageTemplate>
            <div>
                로그인했습니다 따란 
                <Button fullWidth onClick={twitterSignOut}>logout</Button>
            </div>
        </PageTemplate>
    );
}

export default Main;