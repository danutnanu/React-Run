import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Run2022 from './components/pages/Run2022';
import Run2023 from './components/pages/Run2023';
import Run2024 from './components/pages/Run2024';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/run2022' exact component={Run2022} />
          <Route path='/run2023' exact component={Run2023} />
          <Route path='/run2024' exact component={Run2024} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
