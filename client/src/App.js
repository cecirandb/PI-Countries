import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCountry } from './redux/actions/actions.js';
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home.jsx';
import CreateActivity from './components/CreateActivity.jsx';
import CountryDetail from './components/CountryDetail.jsx';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry())
  }, [dispatch])

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/countries' element={<Home/>}/>
          <Route path='/activity' element={<CreateActivity/>}/>
          <Route path='/countries/:id' element={<CountryDetail/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
