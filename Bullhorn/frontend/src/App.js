import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Header } from "./components";

import * as Pages from './pages'


function App() {
  return (
    <>
      <div id="app">
            <main>
              <Header />
              <Routes>
                  <Route path='/' element={<Pages.Home />}/>
                  <Route path='/profile' element={<Pages.Profile />}/>
              </Routes>
            </main>
      </div>
    </>
  )
};

export default App;
