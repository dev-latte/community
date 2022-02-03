import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addData, snapshotData } from "../../components/api/firebaseAPI";
import { addStatus } from "../../redux/status/action";

const UserStatusTemplate = styled.div`
    border: 1px solid #fff;
    width: 70%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 10px;
`;

const StatusItem = styled.div`
    flex: 1;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UserStatus = () => {
    const userObj = useSelector((state) => state.user.user);
    const userStatus = useSelector(state => state.status.status);
    const [status, setStatus] = useState(userStatus);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        snapshotData('characterStatus', userObj.uid);
    }, []);

    const onClickStatUp = (e) => {
        const target = e.target.dataset.status;
        if(status.sp <= 0) { return; }
        const newStatus = {...status, sp:status['sp']-1, [target]:status[target]+1};
        setStatus(newStatus);
        dispatch(addStatus(newStatus));
        addData('characterStatus', userObj.uid, newStatus);
    }

    return (
        <UserStatusTemplate>
            <StatusItem>
                <span>Level : {status.lv}</span>
            </StatusItem>
            <StatusItem>
                <span>Stat Point: {status.sp}</span>
            </StatusItem>
            <StatusItem>
                <span>EXP(경험치): {status.exp}</span>
            </StatusItem>
            <StatusItem>
                <span>ATK(공격) : {status.atk}</span>
            </StatusItem>
            <StatusItem>
                <span>HP(체력) : {status.hp}</span>
                {status.sp > 0 && <button data-status="hp" onClick={onClickStatUp}>+</button>}
            </StatusItem>
            <StatusItem>
                <span>DEF(방어) : {status.def}</span>
                {status.sp > 0 && <button data-status="def" onClick={onClickStatUp}>+</button>}
            </StatusItem>
            <StatusItem>
                <span>STR(힘) : {status.str}</span>
                {status.sp > 0 && <button data-status="str" onClick={onClickStatUp}>+</button>}
            </StatusItem>
            <StatusItem>
                <span>INT(마법) : {status.int}</span>
                {status.sp > 0 && <button data-status="int" onClick={onClickStatUp}>+</button>}
            </StatusItem>
            <StatusItem>
                <span>DEX(민첩) : {status.dex}</span>
                {status.sp > 0 && <button data-status="dex" onClick={onClickStatUp}>+</button>}
            </StatusItem>
            <StatusItem>
                <span>LUK(행운) : {status.luk}</span>
                {status.sp > 0 && <button data-status="luk" onClick={onClickStatUp}>+</button>}
            </StatusItem>
        </UserStatusTemplate>
    );
}

export default UserStatus;