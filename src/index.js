import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  // <App/>,
  document.getElementById('root')
);


// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';

// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
