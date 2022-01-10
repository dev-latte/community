import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    font-family: 'fixedsys';
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    background: #ccc;
    &:hover {
        background: #000;
    }

    ${props => 
        props.fullWidth && 
        css`
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            width: 90%;
        `}
    ${props => 
        props.cyan &&
        css`
            background: #444;
            &:hover {
                background: #123;
            }
        `}
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;