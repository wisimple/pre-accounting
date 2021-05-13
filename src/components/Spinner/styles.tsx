import styled, { keyframes } from "styled-components";

const spinnerKeyframes = keyframes`
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
`;

export const StyledSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;

  &::after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 6px;
    box-sizing: border-box;
    border: 24px solid #2563eb;
    border-color: #2563eb transparent #2563eb transparent;
    animation: ${spinnerKeyframes} 1.2s infinite;
  }
`;
