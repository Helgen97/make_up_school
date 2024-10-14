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

const BotSettingsPageProvider = lazy(() =>
  import("../../pageContainers/BotSettingsPageProvider")
);

const PasswordSettingsPageProvider = lazy(() =>
  import("../../pageContainers/PasswordSettingsPageProvider")
);

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
      {
        path: "bot-settings",
        element: <BotSettingsPageProvider />,
      },
      {
        path: "password",
        element: <PasswordSettingsPageProvider />,
      },
      {
        path: "*",
        element: <ErrorPageProvider />,
      },
    ],
  },
];

const BROWSER_ROUTER = createBrowserRouter(ROUTES_LIST);

export default BROWSER_ROUTER;
