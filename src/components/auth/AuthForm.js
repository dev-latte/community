import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const AuthFormBlock = styled.div`
    text-align: center;
`;

const AuthForm = ({member, onClickLogin}) => {
    return (
        <AuthFormBlock>
            <Button cyan fullWidth onClick={onClickLogin}>{member ? "Authentication" : "Guest visit"}</Button>
        </AuthFormBlock>
    );
}

export default AuthForm;