import React from "react";
import styled from "styled-components";
import HeaderTemplate from "../components/header/HeaderTemplate";

const MoreTemplate = styled.div`
    z-index: 100;
    width: 100%;
    height: 100%;
    background: #000;
    position: fixed;
    top: 0;
    left: 0;
    color:#fff;
`;

const BackButtonDiv = styled.div`
    height: 45px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const MoreContentDiv = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid white;
    display: flex;
    justify-content: center;
`;

const More = ({children, onClick}) => {
    return (
        <MoreTemplate>
            <HeaderTemplate>
                <BackButtonDiv onClick={onClick}>
                    back
                </BackButtonDiv>
            </HeaderTemplate>
            <MoreContentDiv>
                { children }
            </MoreContentDiv>
        </MoreTemplate>
    );
}

export default More;