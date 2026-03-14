import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SEOPage from "./pages/SEO";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GoogleAdsPage from "./pages/GoogleAds";
import VideoEditingPage from "./pages/VideoEditing";
import WebDevelopmentPage from "./pages/WebDevelopement";
import DigitalMarketingPage from "./pages/DigitalMarketing";
import GraphicDesigningPage from "./pages/GrapicDesigning";
import SocialMediaPage from "./pages/SocialMediaMarketing";
import { HelmetProvider } from 'react-helmet-async';
// import ContactForm from "./components/Form";

function App() {
  return (
    <HelmetProvider>

   
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* //-----------------------Page-------------------------------// */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        {/* //-----------------------DropDown---------------------------// */}
        <Route path="/seo" element={<SEOPage />} />
        <Route path="/google" element={<GoogleAdsPage />} />
        <Route path="/video" element={<VideoEditingPage />} />
        <Route path="/web" element={<WebDevelopmentPage />} />
        <Route path="/social" element={<SocialMediaPage />} />
        <Route path="/graphic" element={<GraphicDesigningPage />} />
        <Route path="/marketing" element={<DigitalMarketingPage />} />
        {/* <Route path="/form" element={<ContactForm/>} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;