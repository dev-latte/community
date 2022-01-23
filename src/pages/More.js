import React from "react";
import styled from "styled-components";
import HeaderTemplate from "../components/header/HeaderTemplate";

const MoreTemplate = styled.div`
    width: 100%;
    height: 100%;
    background: #000;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    color: #fff;
`;

const BackButtonDiv = styled.div`
    height: 45px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const More = ({onClick}) => {
    return (
        <MoreTemplate>
            <HeaderTemplate>
                <BackButtonDiv onClick={onClick}>
                    back
                </BackButtonDiv>
            </HeaderTemplate>
        </MoreTemplate>
    );
}

export default More;