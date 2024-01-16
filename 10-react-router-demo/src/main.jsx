import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './routes/root.jsx';
import ErrorPage from './error-page.jsx';
import Contact from './routes/contact.jsx';

import {loader as rootLoader, action as rootAction} from './routes/root.jsx'
import {loader as contactLoader,action as destroyAction} from './routes/contact.jsx'
import EditContact, {
  action as editAction,
} from "./routes/edit";
import Index from './routes/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    loader:rootLoader,
    action:rootAction,
    children:[
      {index:true,element:<Index/>},
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader:contactLoader,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action:editAction,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
