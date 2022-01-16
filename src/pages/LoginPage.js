import React, { useState } from "react";
import { signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import styled from "styled-components";
import AuthForm from "../components/auth/AuthForm";
import AuthTemplate from "../components/auth/AuthTemplate";
import TabNav from "../components/common/TabNav";
import { auth, provider } from "../FirebaseInstance";

const LoginFormBox = styled.form`
    width: 360px;
    height: 200px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
    background: white;
    border-radius: 2px;
    border: 1px solid pink;
    .logo-area {
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
        padding: 2.5rem 0rem;
    }
`;

const LoginPage = () => {
    const [member, setMember] = useState(true); // true - member , false - guest

    const onClickNav = (e) => {
        e.preventDefault();
        setMember(!member);
    }

    const onSubmitTwitterLogin = (e) => {
        e.preventDefault();

        signInWithPopup(auth, provider)
          .then((result) => {
              // 로그인 성공
            // const credential = TwitterAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // const secret = credential.secret;
        
            // const user = result.user;
            // console.log(credential);
            console.log(result);
  
          }).catch((error) => {
              console.error(`error code ${error.code} > ${error.message}`);
          });
    }

    return (
        <AuthTemplate>
            <LoginFormBox onSubmit={onSubmitTwitterLogin}>
                <TabNav member={member} onClick={onClickNav}/> 
                <div className="logo-area">
                    <p>UNKNOWN SYSTEM ACCESS</p>
                </div>
                <AuthForm member={member}/>
            </LoginFormBox>
        </AuthTemplate>
    );
}

export default LoginPage;