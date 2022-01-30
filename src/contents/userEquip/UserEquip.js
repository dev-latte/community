import React from "react";
import styled from "styled-components";

const UserEquipTempalte = styled.div`
    width: 300px;
    height: 450px;
    border: 1px solid aqua;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 10px;
    padding: 10px;
    div{
        border: 1px solid #fff;
    }
`;

const UserEquip = () => {
    return (
        <UserEquipTempalte>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </UserEquipTempalte>
    );
}

export default UserEquip;