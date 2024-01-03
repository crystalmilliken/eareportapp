import Home from "./Home";
import Report from "./Reporting";
import Contact from "./Contact";

const routes = [
  { path: "/", component: <Home />, exact: true },
  { path: "/report", component: <Report /> },
  { path: "/contact", component: <Contact /> },
];

export default routes;
