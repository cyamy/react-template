import { css, keyframes } from '@emotion/react';

export const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const body = css`
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
`;

export const app = css`
  max-width: 1280px;
  padding: 2rem;
  margin: 0 auto;
  text-align: center;
`;

export const logoVite = css`
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`;

export const logoReact = css`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  animation: ${logoSpin} infinite 20s linear;

  &:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`;

export const card = css`
  padding: 2em;
`;

export const readTheDocs = css`
  color: #888;
`;
