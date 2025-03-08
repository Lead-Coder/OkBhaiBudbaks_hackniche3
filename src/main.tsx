import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ChatbotIcon from './pages/ChatBox'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ChatbotIcon />
  </StrictMode>,
)
