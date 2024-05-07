import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./app/routes/allRoutes";

const App = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default App;
