import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import './App.css';

// Lazy-loaded components for better performance
const Layout = lazy(() => import("./Pages/Layout/Layout"));
const PagesLayout = lazy(() => import("./Pages/Layout/PagesLayout"));
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
const NotFound = lazy(() => import("./Pages/NotFound")); // Add a NotFound component for fallback

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* User-related routes */}
          <Route path="/user" element={<PagesLayout />}>
            <Route index element={<Home />} /> {/* Default route at /user */}
            <Route path="home" element={<Home />} /> {/* Explicit /user/home route */}
            <Route path="farms" element={<Farms />} />
            <Route path="crops" element={<Crops />} />
            <Route path="insights" element={<Insights />} />
            <Route path="weather" element={<Weather />} />
            <Route path="market" element={<Market />} />
            <Route path="resources" element={<Resources />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Landing-related routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} /> {/* Default route */}
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="authentication" element={<Authentication />} />
          </Route>

          {/* Catch-all route for 404 errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
