import React from "react";
import styled from "styled-components";

const TemplateDiv = styled.div`
    border: 1px solid blue;
    width: 100%;
    height: 100vh;
    position: relative;
`;

const PageTemplate = ({children}) => {
    return (
        <TemplateDiv>
            {children}
        </TemplateDiv>
    )
}

export default PageTemplate;