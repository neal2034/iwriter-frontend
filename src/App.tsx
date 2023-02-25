import React  from 'react';
import {Router} from 'react-chrome-extension-router';
import Main from "./pages/main/Main";

function App() {
  return (
      <Router>
          <Main/>
      </Router>
  );
}

export default App;
