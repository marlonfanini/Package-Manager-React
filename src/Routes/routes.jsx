import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AddressForm } from '../App';
import { ListComponent } from '../ListComponent/ListComponent';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AddressForm />} />
      <Route path="/package" element={< ListComponent/>} />
    </Routes>
  );
};

