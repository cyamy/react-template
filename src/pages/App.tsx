import { useState } from 'react';
import { app, body, card, logoReact, logoVite, readTheDocs } from './App.style';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div css={body}>
      <div css={app}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" css={logoVite} alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src="/react.svg" css={logoReact} alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div css={card}>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p css={readTheDocs}>Click on the Vite and React logos to learn more</p>
      </div>
    </div>
  );
};
