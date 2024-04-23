import React from "react";
import ReactDOM from "react-dom/client";
import Timeline from "./Timeline.jsx";
import "./index.css";
//import './App.css';

import SideBar from "./sideBar.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profil_Act from "./composantSider/profil_Act.jsx";
import AppGlobal from "./AppGlobal";
import HomeInc from "./composantSider/homeIncon.jsx";
import Export from "./composantSider/explore.jsx";
import Notification from "./composantSider/notification.jsx";
import Message from "./composantSider/message.jsx";
import Bookmark from "./composantSider/bookmark.jsx";
import list from "./composantTrends/list.jsx";
import MoreInc from "./composantSider/more.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppGlobal />,
  },
  {
    path: "/post",
    element: <Profil_Act />,
  },
  {
    path: "/",
    element: <HomeInc />,
  },
  {
    path: "/explore",
    element: <Export />,
  },
  {
    path: "/notifications",
    element: <Notification />,
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "/bookmark",
    element: <Bookmark />,
  },
  {
    path: "/list",
    element: <list />,
  },
  {
    path: "/more",
    element: <MoreInc />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
