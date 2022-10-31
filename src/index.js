import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/main.scss';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home/Home';
import Sale from './pages/Sale/Sale';
import Foundation from "./pages/Foundation/Foundation";
import Wallet from './pages/Wallet/Wallet';

const router = createBrowserRouter([
    {
        path: '/',
        exact: true,
        element: <Home />,
    },
    {
        path: '/sale',
        element: <Sale />
    },
    {
        path: '/foundation',
        element: <Foundation />
    },
    {
        path: '/wallet',
        element: <Wallet />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
        <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
