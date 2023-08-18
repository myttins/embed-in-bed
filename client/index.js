import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './MainContainer';
import History from './History';
import './style.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainContainer />,
    children: [
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
