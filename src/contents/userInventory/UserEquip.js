import React from "react";
import styled from "styled-components";

const UserEquipTempalte = styled.div`
    width: 250px;
    height: 320px;
    border: 1px solid aqua;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 5px;
    padding: 10px;
    div{
        border: 1px solid #fff;
    }
`;

const UserEquip = () => {
    // 1. 처음에는 착용 정보가 존재하지 않음
    // 2. 빈칸 클릭 > 착용 가능 장비 외에는 스크린처리(검은색)
    // 3. 해당 아템 드롭다운? 아니면 오른쪽 버튼 클릭 후  착용 누르긴
    // 4. head / chest / belt / pants / shoes / weapon / ring / earring / gloves 로 구성
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