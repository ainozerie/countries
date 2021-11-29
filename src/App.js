import { Component } from 'react';
import React from 'react';
import './App.css';
import CountriesList from './CountriesList';
import {BrowserRouter, Link, Routes, Route, useParams} from 'react-router-dom';
import Home from './Home';
import CountrySingle from './CountrySingle';

const RouteWrapper = (props) => {
  const params = useParams();
  return <CountrySingle params={params}{...props}/>
} 

class App extends Component {

  render () {
    return (
      <BrowserRouter>

        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/countries'>Countries</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/countries' element={<CountriesList/>} />
          <Route path='/countries/:name' element={<RouteWrapper/>} />
        </Routes>
      </BrowserRouter>
    );
  };
};

export default App;
