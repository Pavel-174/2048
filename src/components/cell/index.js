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
  &[class^="cell-"]{
    background-color: #fefe22;
  }
  &.cell-0{
    background-color: transparent;
  }
  &.cell-2{
    background-color: #f3da0b;
  }
  &.cell-4{
    background-color: #00a550;
  }
  &.cell-8{
    background-color: #7fff00;
  }
  &.cell-16{
    background-color: #296600;
  }
  &.cell-32{
    background-color: #808000;
  }
  &.cell-64{
    background-color: #9f8200;
  }
  &.cell-128{
    background-color: #b8860b;
  }
  &.cell-256{
    background-color: #d10077;
  }
  &.cell-512{
    background-color: #523600;
  }
  &.cell-1024{
    background-color: #5b3a29;
  }
  &.cell-2048{
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
  <StyledCell className={`cell-${val}`}>
    <div>{val ? <Num>{val}</Num> : ''}</div>
  </StyledCell>
);

export default React.memo(Cell);