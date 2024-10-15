import React, { ReactElement } from 'react';

import { SP365AppProvider } from 'core/theme';

interface FluentProviderProps {
  children: ReactElement;
}

const Wrapper: React.FC<FluentProviderProps> = (props) => {
  const { children } = props;

  return (
    <SP365AppProvider appId="lab">
      <div style={{padding: '0', width: '100%'}}>
        {children}
      </div>
    </SP365AppProvider>
  );
};

export default Wrapper;
