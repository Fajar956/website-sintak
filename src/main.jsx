import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import Kontak from './pages/Kontak.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Review from './pages/review.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Kontak' element={<Kontak />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/Review' element={<Review />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
