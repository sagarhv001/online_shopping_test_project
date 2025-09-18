import './App.css'
import LoginPage from './Components/LoginPage/LoginPage'
import ProductPage from './Components/ProductPage/ProductPage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </div>
  )
}

export default App;
