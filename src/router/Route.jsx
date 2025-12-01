import { createBrowserRouter } from "react-router";
import ListedBooks from '../pages/ListedBooks';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import SingleBook from '../pages/SingleBook';
import WishListPage from '../pages/WishListPage';
import ReadPage from "../pages/ReadPage";
import PageToRead from "../pages/PageToRead";


export const router = createBrowserRouter([
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
        element: <ListedBooks />,
        children: [
            {
                index: true,
                element: <ReadPage />
            },
            {
                path: "wishListPage",
                element: <WishListPage />
            }
        ]
      },
      {
        path: "/pageToRead",
        element: <PageToRead />
      }
    ]
  },
  
]);