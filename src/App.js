
 

import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Body } from "./components/body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutPage from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/restaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";

const InstaMart = lazy(() => import("./components/Instamart"));
const userInfo = {
  user: {
    name: "dummy",
    email: "Kuchvi@email.com",
  },
};
const AppLayout = () => {
  const { user } = useContext(UserContext);
  // const [user, setUser] = useState(userInfo);
  return (
    <UserContext.Provider value={{ user }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
