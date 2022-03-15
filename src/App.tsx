import "./App.css";
import * as React from "react";
import { Outlet, RouteObject, useRoutes } from "react-router-dom";
import Project from "./pages/Project";
import ProjectMenu from "./pages/ProjectMenu";
import Error from "./pages/Error";

import ThreejsJourney from "./projects/threejs-journey/Index";
import ShoeColor from "./projects/shoe-color/ShoeColor";
import YellBall from "./projects/yellow-ball/App";

function Layout() {
  return (
    <div className="layout">
      <Outlet />
    </div>
  );
}

let RoutesGroup: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ProjectMenu /> },
      {
        path: "/project",
        element: <Project />,
        children: [
          { index: true, element: <ProjectMenu /> },
          { path: "/project/threejs-journey", element: <ThreejsJourney /> },
          { path: "/project/shoe-color", element: <ShoeColor /> },
          { path: "/project/yellow-ball", element: <YellBall /> },
        ],
      },
      { path: "*", element:  <Error /> },
    ],
  },
];

function App() {
  let element = useRoutes(RoutesGroup);
  return (
    <div className="App">
      {element}
      <Outlet />
    </div>
  );
}

export default App;
