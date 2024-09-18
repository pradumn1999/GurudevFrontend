import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Wisdom from './components/Wisdom';
import Contact from './components/Contact';
// import Checkout from './components/Checkout';
// import Checkout from './components/Checkout';
import NavigationFooter from './components/NavigationFooter';
import Login from "./components/Login"
import Signup from "./components/Signup";
import Checkout from './components/Checkout';
import AddressPaymentPage from './components/AdressPaymentPage';
import Payment from './components/Payment';
import PaymentForm from './components/PaymentForm';

function App() {
  const [selectedBook, setSelectedBook] = useState({ title: 'Sample Book', price: 675 });

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work setSelectedBook={setSelectedBook} />} />
        <Route path="/wisdom" element={<Wisdom />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/checkout" element={<Checkout book={selectedBook} />} /> */}
        <Route path="/login" element={ <Login book={selectedBook}  />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/signup' element={<Signup />}/>
        {/* <Route path='/address-payment' component={AddressPaymentPage} /> */}
        <Route path="/address-payment" element={<AddressPaymentPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentform" element={<PaymentForm />} />
        

      </Routes>
      <NavigationFooter />
      <Footer />
    </div>
  );
}

export default App;
