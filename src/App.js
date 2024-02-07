import React from 'react'
import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Singleproduct from './components/pages/Singleproduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './components/pages/Cartpage'
import { Provider } from 'react-redux'
import store from './utils/store'
import Footer from './components/Layout/Footer'

function App() {
  return (
    < Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<Singleproduct />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/contact' element={<Footer />} />


        </Routes>
      </BrowserRouter>

    </Provider>
  );

}


export default App