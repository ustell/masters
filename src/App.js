/** @format */

import Main from "./pages/main";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./scss/app.scss";

import { Path } from "./path";
import PhoneRegistration from "./pages/login/index.jsx";
import ActiveOrders from "./pages/orders_Active/Index";
import Header from "./component/Header/Header";
import { Footer } from "./component/Footer/Footer";

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
    {
      path: Path.activeOrders,
      element: <ActiveOrders />,
    },
  ]);
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        {" "}
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
