import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";

import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute
import { Box } from "@mui/material";

// Lazy-loaded components
const PagesLayout = lazy(() => import("./Pages/Layout/PagesLayout"));
const Layout = lazy(() => import("./Pages/Layout/Layout"));
const LandingPage = lazy(() => import("./Pages/Landing/LandingPage/LandingPage"));
const AboutUs = lazy(() => import("./Pages/Landing/About Us/AboutUs"));
const ContactUs = lazy(() => import("./Pages/Landing/Contact Us/ContactUs"));
const Authentication = lazy(() => import("./Pages/Landing/AuthPage/AuthPage"));
const Home = lazy(() => import("./Pages/Home/Home"));
const Farms = lazy(() => import("./Pages/Farms"));
const Crops = lazy(() => import("./Pages/Crops"));
const Insights = lazy(() => import("./Pages/Insights"));
const Weather = lazy(() => import("./Pages/Weather"));
const Market = lazy(() => import("./Pages/Market"));
const Resources = lazy(() => import("./Pages/Resources"));
const Settings = lazy(() => import("./Pages/Settings"));
const NotFound = lazy(() => import("./Pages/NotFound"));


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <Box sx={{backgroundColor: "white", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}></Box>
      }>
        <Routes>
          {/* Protected User Routes */}
          <Route
            path="/user/"
            element={<ProtectedRoute element={<PagesLayout />} />} // Protect PagesLayout
          >
            <Route index path="" element={<Home />} />
            <Route path="farms" element={<Farms />} />
            <Route path="crops" element={<Crops />} />
            <Route path="insights" element={<Insights />} />
            <Route path="weather" element={<Weather />} />
            <Route path="market" element={<Market />} />
            <Route path="resources" element={<Resources />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Public Landing Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="authentication" element={<Authentication />} />
          </Route>

          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
