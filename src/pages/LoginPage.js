import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import AuthForm from "../components/auth/AuthForm";
import AuthTemplate from "../components/auth/AuthTemplate";
import TabNav from "../components/common/TabNav";
import { auth, provider } from "../FirebaseInstance";
import { addData, getData } from "../components/api/firebaseAPI";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/user/action";
import { nvl } from "../components/validation/common";
import { addStatus } from "../redux/status/action";
import { initialStatus } from "../redux/status/reducer";
import { initStatus } from "../redux/status/action";

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
    const dispatch = useDispatch();

    const onClickNav = (e) => {
        e.preventDefault();
        setMember(!member);
    }

    const onSubmitTwitterLogin = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
          .then((response) => {
            const user = response.user;
            const userData = {
                displayName: user.displayName,
                photoURL: user.photoURL,
                screenName: user.reloadUserInfo.screenName,
                uid: user.uid,
                securityLevel: 3 // default : 최저등급
            }
            
            // 데이터베이스에 유저 정보 추가
            getData('memberList', user.uid)
                .then(response => {
                    if(response.securityLevel < 2) {
                        userData.securityLevel = response.securityLevel;
                    }
                })
                .catch(e => {
                    console.log(`getMember error ${e}`);
                })
                .finally(el => {
                    addData('memberList', user.uid, userData);
                    dispatch(addUser(userData));
                });

            // 데이터베이스에 유저 스테이터스 정보 추가
            getData('characterStatus', user.uid)
                .then(response => {
                    console.log(response);
                    if(nvl(response)) {
                        addData('characterStatus', user.uid, initialStatus);
                        dispatch(initStatus());
                        return;
                    }
                    dispatch(addStatus(response));
                })
                .catch(e => {
                    console.error(`userStatus > ${e}`);
                });
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