import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {AuthProvider} from './context/AuthProvider';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
    <ToastContainer/>
      <Routes>
        <Route path='/*' element={<App />}/>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
reportWebVitals();
