import React from "react";
import styled from "styled-components";
import TabNav from "../common/TabNav";

const AuthTemplateBlock = styled.div`
    width: 100vw;
    height: 100vh;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginFormBox = styled.div`
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

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBlock>
            <LoginFormBox>
                <TabNav/>
                <div className="logo-area">
                    <p>TITLE</p>
                </div>
                {children}
            </LoginFormBox>
        </AuthTemplateBlock>
    );
}

export default AuthTemplate;