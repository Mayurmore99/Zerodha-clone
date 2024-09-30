import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Landing_page/home/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./Landing_page/signup/SignUp";
import AboutPage from "./Landing_page/about/About";
import ProductPage from "./Landing_page/products/ProductPage";
import PricingPage from "./Landing_page/pricing/PricingPage";
import SupportPage from "./Landing_page/support/SupportPage";
import Footer from "./Landing_page/Footer";
import NavBar from "./Landing_page/NavBar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {" "}
          <NavBar /> <HomePage /> <Footer />
        </>
      ),
    },
    {
      path: "/SignUp",
      element: (
        <>
          <NavBar /> <Signup />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <NavBar />
          <AboutPage />
          <Footer />
        </>
      ),
    },
    {
      path: "/products",
      element: (
        <>
          <NavBar />
          <ProductPage />
          <Footer />
        </>
      ),
    },
    {
      path: "/pricing",
      element: (
        <>
          <NavBar />
          <PricingPage />
          <Footer />
        </>
      ),
    },
    {
      path: "/support",
      element: (
        <>
          <NavBar />
          <SupportPage />
          <Footer />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
