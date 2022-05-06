import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'

function App() {
  return (

    <>
      <div id="app">
            <main>
              <Routes>
                  <Route path='/' element={<Home />}/>
              </Routes>
            </main>
      </div>
    </>
  )
};

export default App;
