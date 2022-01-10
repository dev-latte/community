import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const AuthFormBlock = styled.div`
    text-align: center;
`;

const AuthForm = () => {
    return (
        <AuthFormBlock>
            <Button cyan fullWidth>Authentication</Button>
        </AuthFormBlock>
    );
}

export default AuthForm;