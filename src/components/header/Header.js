import React, { useState } from "react";
import styled from "styled-components";
import More from "../../pages/More";
import HeaderTemplate from "./HeaderTemplate";

const ProfileButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    cursor: pointer;
    padding-right: 20px;
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0px 5px;
    }
    span {
        display: flex;
        align-items: center;
        margin: 5px;
    }
`;

const Header = ({userObj}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        {isOpen && <More onClick={() => setIsOpen(!isOpen)}/>}
        <HeaderTemplate>
            <div>LOGO</div>
            <ProfileButtonDiv onClick={() => setIsOpen(!isOpen)}>
                <img src={userObj.photoURL} alt="profile_image"/>
                <span>{userObj.displayName}</span>
            </ProfileButtonDiv>
        </HeaderTemplate>
        </>
    );
}

export default Header;