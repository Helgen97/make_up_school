import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../../pageContainers/Layout";

const IndexPage = lazy(() => import("../../pageContainers/IndexPage"));
const AlbumsPage = lazy(() => import("../../pageContainers/AlbumsPage"));
const AlbumPage = lazy(() => import("../../pageContainers/AlbumPage"));
const ErrorPage = lazy(() => import("../../pageContainers/ErrorPage"));

const ROUTES_LIST = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "albums",
        element: <AlbumsPage />,
      },
      {
        path: "album/:id",
        element: <AlbumPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
];

const BROWSER_ROUTER = createBrowserRouter(ROUTES_LIST);

export default BROWSER_ROUTER;
