import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
    font-size: 1.6rem;
    padding: 1rem 2rem;
    border: .3rem solid #ffd700;
    border-radius: 10px;
    background-color: rgba(255, 215, 0, .3);
    font-family: 'Lugrasimo', cursive;
    font-weight: 600;
    color: white;
    cursor: pointer;
    &:hover{
      background-color: rgba(255, 215, 0, .9);
    }
`;

const Button = ({ onClick, label }) => (
  <StyledButton onClick={onClick}>{label}</StyledButton>
);

export default Button;