/** @format */

import Main from "./pages/main";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./scss/app.scss";

import { Path } from "./path";
import PhoneRegistration from "./pages/login/index.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: Path.login,
      element: <PhoneRegistration />,
    },
    {
      path: Path.register,
      element: <h2>reg</h2>,
    },
    {
      path: Path.home,
      element: <Main />,
    },
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
