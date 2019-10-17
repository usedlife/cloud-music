import React from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom'

import { GlobalStyle } from './style'
import routes from './routes'

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      {renderRoutes(routes)}
    </HashRouter>
  );
}

export default App;
