import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { DashBoard_Layout } from './dashBoard/DashBoard_Layout'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DashBoard_Layout></DashBoard_Layout>
  </StrictMode>,
)
