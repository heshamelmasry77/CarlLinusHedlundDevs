import React from 'react';
import './index.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import AboutPage from './components/main/about/about';
import ContactPage from './components/main/contact/contact';
import ProjectPage from './components/main/projects';
import AdminPage from './components/main/admin/admin';
import HomePage from './components/main/home/home';


function App() {
  return (
    <BrowserRouter>
      <div className="m-0 flex w-screen flex-col md:flex-row scroll-smooth ">
        <Header />
        <div id="main" className="md:fixedWidth flex h-full w-full flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/about" element={<AboutPage />} exact />
            <Route path="/projects" element={<ProjectPage />} exact />
            <Route path="/contact" element={<ContactPage />} exact />
            <Route path="/admin" element={<AdminPage />} exact />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
