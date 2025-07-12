import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './components/context/CartContext.jsx'
import { AuthProvider } from './components/context/AuthContext.jsx'
import { ProductProvider } from './components/context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>,
)
