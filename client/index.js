import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './MainContainer';
import History from './History';
import App from './App';
import './style.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <MainContainer />,
      },
      {
        path: 'history',
        element: <History />,
      },
    ],
  },
  {
    path: '/history',
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
