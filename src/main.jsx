import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ListedBooks from './pages/ListedBooks';
import ReadPages from './pages/ReadPages';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import SingleBook from './pages/SingleBook';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/book.json')
      },
      {
        path: "/:id",
        element: <SingleBook />,
        loader: () => fetch('/book.json')
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />
      },
      {
        path: "/readPages",
        element: <ReadPages />
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
    <Toaster />
  </StrictMode>,
)
