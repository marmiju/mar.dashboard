import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { DashBoard_Layout } from './dashBoard/DashBoard_Layout'
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import { WellCome } from './Components/Screen/WellCome'
import { Profile } from './Components/Screen/Profile'
import { Skills } from './Components/Screen/Skills'
import { Experience } from './Components/Screen/Experience'
import { Blogs } from './Components/Screen/Blogs'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      {/* Dashboard layout with nested routes */}
      <Route path="/" element={<DashBoard_Layout />}>
        <Route index element={<WellCome />} /> {/* Default content */}
        <Route path="dashboard" element={<WellCome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="skills" element={<Skills />} />
        <Route path="experiences" element={<Experience />} />
        <Route path="blogs" element={<Blogs />} />

      </Route>
    </Routes>
  </BrowserRouter>,
)
