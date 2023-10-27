import React from 'react';
import styled from 'styled-components';

const Feedback = ({ options, onLeaveFeedback }) => (
  <StyledBtnContainer>
    {options.map(option => (
      <StyledBtn
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </StyledBtn>
    ))}
  </StyledBtnContainer>
);

export default Feedback;

const StyledBtnContainer = styled.div`
  max-width: 360px;
  margin: 0 auto;
`;

const StyledBtn = styled.button`
  padding: 10px 10px;
  width: 100px;

  background-color: transparent;
  border: 1px solid gray;
  border-radius: 15px;
  margin-right: 20px;
  cursor: pointer;
`;
