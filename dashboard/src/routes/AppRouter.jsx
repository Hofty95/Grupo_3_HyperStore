import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

import {Home} from '../pages/Home';
import {Users} from '../pages/Users';
import {Products} from '../pages/Products';
import { Root } from '../components/Root';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/products',
                element : <Products/>
            },
            {
                path : '/users',
                element : <Users/>
            }
        ]
    }
])

export const AppRouter = () => {
  return <RouterProvider router={router}/>
}
