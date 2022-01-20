import React, { useState } from "react";
import styled from "styled-components";

const HeaderTemplate = styled.div`
    position: fixed;
    width: 100%;
    height: 45px;
    background: rgba(0, 0, 0, .8);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid pink;
`;

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


    const onClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <HeaderTemplate>
            <div>LOGO</div>
            <ProfileButtonDiv onClick={onClick} className={isOpen ? "active" : ""}>
                <img src={userObj.photoURL} alt="profile_image"/>
                <span>{userObj.displayName}</span>
            </ProfileButtonDiv>
        </HeaderTemplate>
    );
}

export default Header;