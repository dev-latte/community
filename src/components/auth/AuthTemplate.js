import React from "react";
import styled from "styled-components";

const AuthTemplateBlock = styled.div`
    width: 100vw;
    height: 100vh;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBlock>
            {children}
        </AuthTemplateBlock>
    );
}

export default AuthTemplate;