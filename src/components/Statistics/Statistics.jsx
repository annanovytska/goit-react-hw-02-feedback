import React from 'react';
import styled from 'styled-components';

const Statistics = ({ good, neutral, bad, total, positive }) => (
  <StyledStatContainer>
    <p>Good:{good}</p>
    <p>Neutral:{neutral}</p>
    <p>Bad:{bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positive}%</p>
  </StyledStatContainer>
);

export default Statistics;

const StyledStatContainer = styled.div`
  max-width: 360px;
  margin: 0 auto;
  text-align: center;
`;
