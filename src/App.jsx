import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Highlight1 from './Components/Highlight1'
import Highlight2 from './Components/Highlight2'
import Highlight3 from './Components/Highlight3'

const Home = lazy(() => import('./Pages/Home'));
const AboutUs = lazy(() => import('./Pages/AboutUs'));
const Donate = lazy(() => import('./Pages/Donate'));
const Success = lazy(() => import('./Pages/Success'));
const OurProject = lazy(() => import('./Pages/OurProject'));
const Blog = lazy(() => import('./Pages/Blog'));
const Category = lazy(() => import('./Pages/Category'));
const Article = lazy(() => import('./Pages/Article'));
const Events = lazy(() => import('./Pages/Events'));
const Community = lazy(() => import('./Pages/Community'));
const Team = lazy(() => import('./Pages/Team'));
const ContactUs = lazy(() => import('./Pages/ContactUs'));
const JoinCommunity = lazy(() => import('./Pages/JoinCommunity'));

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
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
          <Route path="/highlight1" element={<Highlight1/>}/>
          <Route path="/highlight2" element={<Highlight2/>}/>
          <Route path="/highlight3" element={<Highlight3/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App