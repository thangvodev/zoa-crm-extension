import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserProfileConfigBlock from "./presentation/views/user-profile-config-block";
import AdminProfileConfigAction from "./presentation/views/admin-profile-config-action";
import AdminDashboardPrimaryAreaBlock from "./presentation/views/admin-dashboard-primary-area-block";
import AdminChatMessageProfileBlock from "./presentation/views/admin-chat-message-profile-block";
import AdminChatMessageToolbarAction from "./presentation/views/admin-chat-message-toolbar-action";
import AdminExtensionConfigBlock from "./presentation/views/admin-extension-config-block";

const routes = [
  {
    path: "/zone/user-profile-config-block",
    element: <UserProfileConfigBlock />,
  },
  {
    path: "/zone/admin-profile-config-action",
    element: <AdminProfileConfigAction />,
  },
  {
    path: "/zone/admin-dashboard-primary-area-block",
    element: <AdminDashboardPrimaryAreaBlock />,
  },
  {
    path: "/zone/admin-chat-message-profile-block",
    element: <AdminChatMessageProfileBlock />,
  },
  {
    path: "/zone/admin-chat-message-toolbar-action",
    element: <AdminChatMessageToolbarAction />,
  },
  {
    path: "/zone/admin-extension-config-block",
    element: <AdminExtensionConfigBlock />,
  },
];

const appId = process.env.APP_ID;
const router = createBrowserRouter(routes, { basename: `/extension/${appId}` });

// const router = createBrowserRouter(routes, { basename: `/extension/` });

export default function App() {
  return <RouterProvider router={router} />;
}
