// TODO: 1. Style the landing page
//      2. Create a signup page
//      3. Create a login page
//     4. Create a dashboard page
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./Pages/Layout/Layout";
import LandingPage from './Pages/Landing/LandingPage/LandingPage'
import AboutUs from "./Pages/Landing/About Us/AboutUs"
import ContactUs from "./Pages/Landing/About Us/AboutUs"
import Signup from "./Pages/Landing/SignupPage/Signup"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App  
  