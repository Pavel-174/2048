import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledScored = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-family: 'Lugrasimo', cursive;
  color: white;
  font-size: 1.6rem;
`;

const Score = ({ score }) => (
  <StyledScored>
    Score: {score}
  </StyledScored>
);

const mapStateToProps = state => ({ score: state.board.score })
export default React.memo(connect(mapStateToProps)(Score));