import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className={'gap-50'}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<Profile />} />
          <Route path={'/resume'} element={<Resume />} />
          <Route path={'/projects'} element={<Projects />} />
          <Route path={'/contacts'} element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
