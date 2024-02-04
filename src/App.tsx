import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './screens/Home';
import { Devices } from './screens/Devices';
import { Layout } from './screens/Layout';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/devices' element={<Devices />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
