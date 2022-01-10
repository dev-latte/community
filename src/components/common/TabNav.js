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

const TabNav = () => {
    return (
        <TabNavBlock>
            <ul>
                <li><Link to="#a" className="on">MEMBER</Link></li>
                <li><Link to="#a">GUEST</Link></li>
            </ul>
        </TabNavBlock>
    );
}

export default TabNav;