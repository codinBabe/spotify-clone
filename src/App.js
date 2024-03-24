import "./App.css";
import Login from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]
);
function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;