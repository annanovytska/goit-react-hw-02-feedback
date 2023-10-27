import React from 'react';
import styled from 'styled-components';
const Section = ({ title, children }) => (
  <div>
    <StyledTitle>{title}</StyledTitle>
    {children}
  </div>
);

export default Section;

const StyledTitle = styled.h2`
  text-align: center;
`;
