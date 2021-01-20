import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Customers from './Customers';

const App = () => {

const [selectedCustomer, setSelectedCustomer] = useState({id: ''})

const selectCustomer = (customer) => {
  setSelectedCustomer(customer)
}

// Select Movie function here 

// Video checkout function here 

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
              <Link to="/customerslist">Customers</Link>
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
          <Route path="/customerslist">
            <Customers url = 'http://localhost:3000/' onSelectCustomerCallback={selectCustomer} />
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

function CustomersList() {
  return <h2>Customers</h2>;
}

export default App; 
