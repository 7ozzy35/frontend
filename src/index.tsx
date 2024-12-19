import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx';

import Person from './Person.tsx';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route index element={<App />} />
          <Route path="App" element={<App />} />
          <Route path="Person" element={<Person/>} />
          </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
