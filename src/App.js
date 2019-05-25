import React from 'react';
import GlobalStyle from './theme/global-styles';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import Home from './organisms/home-page';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle/>
          <Home/>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
