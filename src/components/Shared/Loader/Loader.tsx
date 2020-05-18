import React from 'react';
import styled, { keyframes, css } from 'styled-components/macro';

const Container = styled.div`
  width: ${({ size }) => size || 50}px;
  height: ${({ size }) => size || 50}px;
  position: relative;
  margin: 50px auto;
  opacity: 0;
  animation: show 200ms ease-out forwards;
`;

const bounce = keyframes`
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
`;

const sharedStyles = css`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--almond);
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${bounce} 2s infinite ease-in-out;
`;

const Child1 = styled.div`
  ${sharedStyles}
`;

const Child2 = styled.div`
  ${sharedStyles}
  animation-delay: -1s;
`;

/**
 * @param {number} size - Default: 50
 * @description Creates a loader based on size prop or defaults to 50px
 */

const Loader = ({ size = 50 }: { size?: number }) => (
  <Container size={size}>
    <Child1 />
    <Child2 />
  </Container>
);

export default Loader;
