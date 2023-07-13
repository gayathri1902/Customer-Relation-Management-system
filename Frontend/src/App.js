import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Admin from './pages/Admin'
import Customer from './pages/Customer'
import Dashboard from './pages/Dashboard'
import Employee from './pages/Employee'
import Invoice from './pages/Invoice'
import Payment from './pages/Payment'
import Quote from './pages/Quote';
import { Login } from './pages/Login';
import { useState } from 'react';
import { Register } from './pages/Register';
import InvoiceUpdate from './pages/InvoiceUpdate';
import QuoteUpdate from './pages/QuoteUpdate';
import PaymentUpdate from './pages/PaymentUpdate';

const App = () => {

  return (
    <div>  
    <BrowserRouter>
      
        <Routes>
          
          <Route path='/' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Customer" element={<Customer />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Quote" element={<Quote />} />
          <Route path="/edit-invoice/:id" element={<InvoiceUpdate />} />
          <Route path="/edit-quote/:id" element={<QuoteUpdate />} />
          <Route path="/edit-payment/:id" element={<PaymentUpdate />} />

        </Routes>
      
    </BrowserRouter>
    </div>
  );
};

export default App;