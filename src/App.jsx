import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './Pages/AboutUs'
import ScrollToTop from './ScrollToTop'
import Donate from './Pages/Donate'
import Success from './Pages/Success'
import OurProject from './Pages/OurProject'
import Blog from './Pages/Blog'
import Category from './Pages/Category'
import Article from './Pages/Article'
import Events from './Pages/Events'
import Community from "./Pages/Community";
import Team from './Pages/Team'
import ContactUs from './Pages/ContactUs'
import JoinCommunity from './Pages/JoinCommunity'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="donate" element={<Donate />} />
        <Route path="success-page" element={<Success />} />
        <Route path="our-project" element={<OurProject />} />
        <Route path="blog" element={<Blog />} />
        <Route path="category" element={<Category />} />
        <Route path="article" element={<Article />} />
        <Route path="events" element={<Events />} />
        <Route path="community" element={<Community />} />
        <Route path="team" element={<Team />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="join-community" element={<JoinCommunity />} />
      </Routes>
    </div>
  )
}

export default App