import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const { media, cell } = theme;

const StyledCell = styled.div`
  display:flex;
  position:relative;
  height: ${cell.size};
  width: ${cell.size};
  border: ${cell.border} solid white;
  align-items: center;
  justify-content: center;
  @media (${media.md}) {
    height: ${cell.sizeSm};
    width: ${cell.sizeSm};
  }
  &:after{
    content: '';
    background: linear-gradient(to bottom, rgba(255,255,255,0.25) 35%,rgba(255,255,255,0) 100%); 
    top:0;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
  }
  &[class^="neon-"]{
    background-color: #fefe22;
  }
  &.neon-0{
    background-color: transparent;
  }
  &.neon-2{
    background-color: #f3da0b;
  }
  &.neon-4{
    background-color: #00a550;
  }
  &.neon-8{
    background-color: #7fff00;
  }
  &.neon-16{
    background-color: #296600;
  }
  &.neon-32{
    background-color: #808000;
  }
  &.neon-64{
    background-color: #9f8200;
  }
  &.neon-128{
    background-color: #b8860b;
  }
  &.neon-256{
    background-color: #d10077;
  }
  &.neon-512{
    background-color: #523600;
  }
  &.neon-1024{
    background-color: #5b3a29;
  }
  &.neon-2048{
    background-color: #642424;
  }
`;

const Num = styled.span`
  color: black;
  font-size:${cell.fontSize};
  @media (${media.md}) {
    font-size:${cell.fontSizeSm};
  }
`;

const Cell = ({ val }) => (
  <StyledCell className={`neon-${val}`}>
    <div>{val ? <Num>{val}</Num> : ''}</div>
  </StyledCell>
);

export default React.memo(Cell);