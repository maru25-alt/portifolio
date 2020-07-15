import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './navigation/index'
import Footer from './navigation/Footer'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Portifolio from './views/Portifolio'
import Resume from './views/Resume'


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/portifolio'>
            <Portifolio/>
          </Route>
          <Router path='/resume'>
            <Resume/>
          </Router>
        </Switch>
     <Footer/>
    </Router>
    </div>
  );
}

export default App;
