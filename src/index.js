import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import VideoContainer from './components/VideoContainer';

// react-router-setting
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/video/:id",
    element: <VideoContainer />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
