// App.js
import React from 'react';
//import { BrowserRouter as Routes, Route } from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import History from './components/History';
import WordDetails from './components/WordDetails';
import Loader from './components/Loader';
import './App.css';

function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <Home />
    <History />
    <WordDetails />
    
    <Loader />
   
     <Routes>
      
     <Route path="/" element={<Navbar />}>
     <Route index element={<History />} />
     <Route path="WordDetails" element={<WordDetails />} />
        {/* <Route path="/history" component={History} /> */}
        {/* <Route path="/word/:word" component={WordDetails} /> */}
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
