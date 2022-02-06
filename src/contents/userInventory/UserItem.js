import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const UserItemTemplate = styled.div`
    border: 1px solid #fff;
    width:100%;
    display:grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(5, 1fr);
    >div{
        border: 1px solid #fff;
        height: 50px;
        width: 50px;
    }
`;

const UserItem = () => {
    const ITEM_BLOCKS = 50;
    const [items, setItems] = useState([]);

    useEffect(()=>{
        setItems(initItems());
    },[]);

    const initItems = () => {
        const init = [];
        for(let i = 0; i < ITEM_BLOCKS; i++) {
            init.push('');
        }
        return init;
    }

    return (
        <UserItemTemplate>
            {
                items.map((el, index) => <div key={index} className="item">{el}</div>)
            }
        </UserItemTemplate>
    );
}

export default UserItem;