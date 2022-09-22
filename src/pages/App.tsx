import { useState } from 'react';
import { css, keyframes } from '@emotion/react';
import './App.css';

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      css={css`
        display: flex;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
        margin: 0;
      `}
    >
      <div
        className="App"
        css={css`
          max-width: 1280px;
          padding: 2rem;
          margin: 0 auto;
          text-align: center;
        `}
      >
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img
              src="/vite.svg"
              css={css`
                height: 6em;
                padding: 1.5em;
                will-change: filter;

                &:hover {
                  filter: drop-shadow(0 0 2em #646cffaa);
                }
              `}
              alt="Vite logo"
            />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img
              src="/react.svg"
              css={css`
                height: 6em;
                padding: 1.5em;
                will-change: filter;
                animation: ${logoSpin} infinite 20s linear;

                &:hover {
                  filter: drop-shadow(0 0 2em #61dafbaa);
                }
              `}
              alt="React logo"
            />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div
          css={css`
            padding: 2em;
          `}
        >
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p
          css={css`
            color: #888;
          `}
        >
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
