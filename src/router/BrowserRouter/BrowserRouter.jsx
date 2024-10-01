import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../../pageContainers/Layout";

const IndexPageProvider = lazy(() =>
  import("../../pageContainers/IndexPageProvider")
);

const MainDescriptionPageProvider = lazy(() =>
  import("../../pageContainers/MainDescriptionPageProvider")
);

const SchoolDescriptionPageProvider = lazy(() =>
  import("../../pageContainers/SchoolDescriptionPageProvider")
);

const CoursesPageProvider = lazy(() =>
  import("../../pageContainers/CoursesPageProvider")
);

const TeachersPageProvider = lazy(() =>
  import("../../pageContainers/TeachersPageProvider/")
);

const AlbumsPageProvider = lazy(() =>
  import("../../pageContainers/AlbumsPageProvider")
);

// const SettingsPageProvider = lazy(() =>
//   import("../../pageContainers/SettingsPageProvider")
// );

const ErrorPageProvider = lazy(() =>
  import("../../pageContainers/ErrorPageProvider")
);

const ROUTES_LIST = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <IndexPageProvider />,
      },
      {
        path: "main",
        element: <MainDescriptionPageProvider />,
      },
      {
        path: "school",
        element: <SchoolDescriptionPageProvider />,
      },
      {
        path: "courses",
        element: <CoursesPageProvider />,
      },
      {
        path: "teachers",
        element: <TeachersPageProvider />,
      },
      {
        path: "albums",
        element: <AlbumsPageProvider />,
      },
      // {
      //   path: "settings",
      //   element: <SettingsPageProvider />,
      // },
      {
        path: "*",
        element: <ErrorPageProvider />,
      },
    ],
  },
];

const BROWSER_ROUTER = createBrowserRouter(ROUTES_LIST);

export default BROWSER_ROUTER;
