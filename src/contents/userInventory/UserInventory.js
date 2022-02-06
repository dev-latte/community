import React from "react";
import styled from "styled-components";
import Button from "../../components/common/Button";

import UserEquip from '../userInventory/UserEquip';
import UserItem from '../userInventory/UserItem';

const UserInventoryTemplate = styled.div`
    border:1px solid salmon;
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
`;

const UserInventory = ({ openInventory, setOpenInventory }) => {
    return (
        <UserInventoryTemplate>
            <UserEquip></UserEquip>
            <UserItem></UserItem>
            <Button fullWidth onClick={e => setOpenInventory(!openInventory)}>Close Inventory</Button>
        </UserInventoryTemplate>
    );
}

export default UserInventory;