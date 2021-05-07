import React from 'react'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './inc/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './inc/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Switch>
              <Route exact path="/">
              <Home />
              </Route>

              <Route path="/about">
              <About />
              </Route>

              <Route path="/contact">
              <Contact />
              </Route>
            </Switch>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
