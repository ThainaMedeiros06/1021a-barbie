import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import Header from './componentes/header/Header'
import Main from './componentes/main/Main'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
              <Header/>
              <Main/>
            </>,
  },
  {
    path: "/Home",
    element: <div>Página Home!</div>,
  },
  {
    path: "/Notícia",
    element: <div>Página de Noticía!</div>,
  },
  {
    path: "/Sobre",
    element: <div>Página Sobre!</div>,
  },
  {
    path: "/Contato",
    element: <div>Página de Contato!</div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)