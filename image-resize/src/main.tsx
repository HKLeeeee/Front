import React from 'react'
import ReactDOM from 'react-dom/client'
import ImageContainer from './components/ImageContainer.tsx'
import './styles/index.css'
import Header from "./components/Header.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Header />
    <ImageContainer />
  </React.StrictMode>,
)