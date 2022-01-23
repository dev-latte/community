import React from "react";
import styled from "styled-components";

const TemplateDiv = styled.div`
    border: 1px solid black;
    width: 100vw;
    height: 100vh;
    position: relative;
    
    top: 45px;
`;

const PageTemplate = ({children}) => {
    return (
        <TemplateDiv>
            {children}
        </TemplateDiv>
    )
}

export default PageTemplate;