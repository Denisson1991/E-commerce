import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from "react-helmet";

import App from './App';

ReactDOM.render(
<>
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Ropa+Sans:ital@0;1&display=swap" rel="stylesheet" />
    </Helmet>
    <App />
    </>,
  document.getElementById('root')
);

