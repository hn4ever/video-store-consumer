import React, { useState, useEffect } from 'react';
import axios from 'axios';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Customers from './components/Customers';

const App = () => {

const CUSTOMERS_URL = 'http://localhost:3000/customers';
const VIDEOS_URL = 'http://localhost:3000/videos';


const [customersList, setCustomersList] = useState([])
const [selectedCustomer, setSelectedCustomer] = useState(null)

const [videosList, setVideosList] = useState([])
const [selectedVideo, setSelectedVideo] = useState(null)

const [errorMessage, setErrorMessage] = useState(null);

const onSelectCustomerCallback = (customer) => {
  setSelectedCustomer(customer)
}

const onSelectVideoCallback = (video) => {
  setSelectedVideo(video)
}

useEffect(() => {
  axios.get(CUSTOMERS_URL)
    .then((response) => {
      console.log(response.data)
      setCustomersList(response.data);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
}, []);

useEffect(() => {
  axios.get(VIDEOS_URL)
    .then((response) => {
      console.log(response.data)
      setCustomersList(response.data);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
}, []);



// Select Movie function here 

// Video checkout function here 

  return (
    <Router>
      <div>
        <nav>
          <ul>
          <li> <Link to="/">Home</Link> </li> 
          <li> <Link to="/searchVideo">Video Search </Link> </li>
          <li> <Link to="/library">Video Library </Link> </li>
          <li> <Link to="/customers">Customers </Link> </li>
          </ul>
        </nav>
        <h1> Cool Videos Store! </h1>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/searchVideo">
            <SearchVideo />
          </Route>
          <Route path="/library">
            <Library videosList = {videosList} onSelectVideoCallback ={onSelectVideoCallback}/>
          </Route>
          <Route path="/customers">
            <Customers customersList={customersList} onSelectCustomerCallback ={onSelectCustomerCallback} />
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
