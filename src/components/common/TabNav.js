import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const TabNavBlock = styled.nav`
    width: 100%;
    height: 40px;
    ul {
        display: flex;
        height: 100%;
        li {
            flex: 1;
            a { 
                display: block;
                font-family: 'fixedsys';
                color: #555;
                width: 100%;
                height: 40px;
                line-height: 40px;
                text-align: center;
                border-bottom: 1px solid pink;
                border-left: none;
                border-right: none;
                &.on {
                    border-bottom: none;
                }
            }
            &:first-child a {
                border-right: 1px solid pink;
            }
        }
    }
`;

const TabNav = ({member, onClick}) => {
    return (
        <TabNavBlock>
            <ul>
                <li><Link to="#" className={member ? "on" : ""} onClick={onClick}>MEMBER</Link></li>
                <li><Link to="#" className={!member ? "on" : ""} onClick={onClick}>GUEST</Link></li>
            </ul>
        </TabNavBlock>
    );
}

export default TabNav;