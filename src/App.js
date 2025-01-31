import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchPage from "./SearchPage";
import ImagesPage from "./ImagesPage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage/>
          </Route>
          <Route path="/images">
            <ImagesPage/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
