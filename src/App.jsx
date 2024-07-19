import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Idea } from "./components/ideas";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Roles } from "./components/roles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tournament from "./components/Tournament";
import { HelmetProvider, Helmet } from 'react-helmet-async';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = ({ data }) => (
  <div>
    <Helmet>
        <title>GECT Chess Club</title>
    </Helmet>
    <Navigation />
    <Header data={data.Header} />
    <Features data={data.Features} />
    <About data={data.About} />
    <Gallery data={data.Gallery} />
    <Idea data={data.Idea} />
    <Testimonials data={data.Testimonials} />
    <Roles data={data.Roles} />
    <Contact data={data.Contact} />
  </div>
);

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={landingPageData} />} />
          
          <Route path="/tournament" element={<Tournament />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
