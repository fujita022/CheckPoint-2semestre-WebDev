import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Sobre from './pages/Sobre/Sobre.jsx';
import Contato from './pages/Contato/Contato.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path:'/sobre', element: <Sobre/>},
      {path:'/contato', element: <Contato/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
