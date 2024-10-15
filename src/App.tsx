import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createRouter } from './routing/router-factory';

interface AppProps {
  name: string;
  point: HTMLElement;
  onLoad?(): void;
}

const App = ({
  name,
  point,
  onLoad
}: AppProps) => {
  useEffect(() => {
    const mount = () => {
      const router = createRouter({
        name,
      });
      const root = createRoot(point);
      root.render(<RouterProvider router={router} />);

      return () => queueMicrotask(() => root.unmount());
    };

    const unmount = mount();

    if (onLoad) {
      onLoad();
    }

    return () => {
      unmount();
    };
  }, []);

  return null;
};

export default App;
