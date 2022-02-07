import React from "react";
import styled from "styled-components";
import NavIcon from "./NavIcon";

const NavigationTemplate = styled.div`
    background: salmon;
    width: 50px;
    height: calc(100% - 50px);
    position: absolute;
    top: 50px;
    left: 0;
`;

const Navigation = () => {
    return (
        <NavigationTemplate>
            <NavIcon></NavIcon>
        </NavigationTemplate>
    );
}

export default Navigation;