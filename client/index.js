import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

// render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('app'),
// );

render(
  <Switch>
    <Route path='/'> element={<App />}</Route>
  </Switch>,
  document.getElementById('app')
);
