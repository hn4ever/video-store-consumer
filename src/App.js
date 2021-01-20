// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Customer from './components/Board';


export default function App() {
  return (

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/searchVideo">Video Search</Link>
            </li>
            <li>
              <Link to="/library">Video Library</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
              < Customer url = 'http://localhost:3000/' />
            </li>
          </ul>
        </nav>
        <h1>
          Cool Videos!
        </h1>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/searchVideo">
            <SearchVideo />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

function Home() {
  return <h2>Videos</h2>;
}

function SearchVideo() {
  return <h2>Search Video</h2>;
}

function Library() {
  return <h2>Library</h2>;
}

function Customers() {
  return <h2>Customers</h2>;
}