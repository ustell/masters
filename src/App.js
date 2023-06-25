/** @format */

import Main from "./pages/main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route, Routes, createRoutesFromElements } from "react-router-dom";

import { Path } from "./path";
import Register from "./pages/registration/Index";
import ActiveOrders from "./pages/orders_Active/Index";
import Header from "./component/Header/Header";
import { FilterPages } from "./pages/FilterPages/FilterPages";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { Footer } from "./component/Footer/Footer";
import OrderFilling from "./pages/order_Filling";

import "./scss/app.scss";
import OrderCreateProfile from "./pages/order_final";
import FAQ from "./pages/FAQ";
import { RegistrationPages2 } from "./pages/registration/RegistrationPages2";
import ActiveOrdersAll from "./pages/active_order_all";
import MainSpecialist from "./pages/main_specialist";
import { NotFound } from "./pages/NotFound/NotFound";
import SpecialistPage from "./pages/main_specialist/index";

function App() {
  const router = createBrowserRouter([
    {
      path: Path.register,
      element: <Register />,
    },
    {
      path: Path.home,
      element: <Main />,
    },
    {
      path: Path.activeOrders,
      element: <ActiveOrders />,
    },
    {
      path: Path.aside,
      element: <FilterPages />,
    },
    {
      path: Path.profile,
      element: <ProfilePage />,
    },
    {
      path: Path.filterStepOne,
      element: <OrderFilling />,
    },
    {
      path: Path.finalStep,
      element: <OrderCreateProfile />,
    },
    {
      path: Path.FAQ,
      element: <FAQ />,
    },
    {
      path: Path.FAQ,
      element: <FAQ />,
    },
    {
      path: Path.finalRegister,
      element: <RegistrationPages2 />,
    },
    {
      path: Path.myOrder,
      element: <ActiveOrdersAll />,
    },
    {
      path: Path.myProfile,
      element: <ProfilePage />,
    },
    {
      path: Path.registerMasters,
      element: <MainSpecialist />,
    },
    {
      path: Path.notfound,
      element: <NotFound />,
    },
    {
      path: Path.specialist,
      element: <SpecialistPage />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}>
          <Header />
          <Footer />
      </RouterProvider>
    </div>
  );
}

export default App;
