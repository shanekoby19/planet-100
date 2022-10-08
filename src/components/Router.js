import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Sale from './Sale/Sale';
import Foundation from "./Foundation/Foundation";
import Wallet from '../components/Wallet/Wallet';

const router = createBrowserRouter([
    {
        path: '/home',
        element: <App />,
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

export default router;