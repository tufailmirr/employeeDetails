import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from './components/Header.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div>
  
    <Header title='Employee List'/>
    <App />

  </div>
)
