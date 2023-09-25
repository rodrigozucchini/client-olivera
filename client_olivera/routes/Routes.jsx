import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SectionIncruises from '../src/incruises/sections/Section';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" />
        <Route path="/sharkteam" element={<SectionIncruises />}/>
        <Route path="/cumbre" />
      </Routes>
    </Router>
  );
}

export default AppRouter;