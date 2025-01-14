// TODO: 1. Style the landing page
//      2. Create a signup page
//      3. Create a login page
//     4. Create a dashboard page
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./Pages/Layout/Layout";
import { PagesLayout } from "./Pages/Layout/Layout";
import LandingPage from './Pages/Landing/LandingPage/LandingPage'
import AboutUs from "./Pages/Landing/About Us/AboutUs"
import ContactUs from "./Pages/Landing/Contact Us/ContactUs"
import Authentication from "./Pages/Landing/AuthPage/AuthPage"
import Home from "./Pages/Home/Home";
import Farms from "./Pages/Farms";
import Crops from "./Pages/Crops";
import Insights from "./Pages/Insights";
import Weather from "./Pages/Weather";
import Market from "./Pages/Market";
import Resources from "./Pages/Resources";
import Settings from "./Pages/Settings";


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/user" element={<PagesLayout />}>
        <Route index patrh="home" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="farms" element={<Farms />} />
        <Route path="crops" element={<Crops />} />
        <Route path="insights" element={<Insights />} />
        <Route path="weather" element={<Weather />} />
        <Route path="market" element={<Market />} />
        <Route path="resources" element={<Resources />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="authentication" element={<Authentication/>} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App  