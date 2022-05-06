import React from "react";
import { Routes, Route } from 'react-router-dom';

import * as Pages from './pages'


function App() {
  return (

    <>
      <div id="app">
            <main>
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
