import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Customers from './components/Customers';
import Library from  './components/Library';
import Search from './components/Search';

const App = () => {

const CUSTOMERS_URL = 'http://localhost:3000/customers';
const VIDEOS_URL = 'http://localhost:3000/videos';


const [customersList, setCustomersList] = useState([])
const [selectedCustomer, setSelectedCustomer] = useState(null)

const [videosList, setVideosList] = useState([])
const [selectedVideo, setSelectedVideo] = useState(null)

const [errorMessage, setErrorMessage] = useState(null);

const onSelectCustomerCallback = (customerId) => {
  setSelectedCustomer(customersList.find((customer)=> customer.id == customerId))
}

const onSelectVideoCallback = (videoId) => {
  setSelectedVideo(videosList.find((video)=> video.id == videoId))
}

useEffect(() => {
  axios.get(CUSTOMERS_URL)
    .then((response) => {
      setCustomersList(response.data);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
}, []);

useEffect(() => {
  axios.get(VIDEOS_URL)
    .then((response) => {
      setVideosList(response.data);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
}, []);

// Video checkout function here 
const onCheckout = () => {
  if(selectedVideo != null && selectedCustomer != null){
  setVideosList(videosList.filter((video) => video.id != selectedVideo.id))
  setSelectedVideo(null)
  setSelectedCustomer(null)
  //error message in else statement?
  }
}

  return (
    <Router>
      <div className = 'App-main-div'>
        <nav className= 'navbar'>
          <ul>
          <li className= 'nav-link-list'> <Link to="/">Home</Link> </li> 
          <li className= 'nav-link-list'> <Link to="/search">Search </Link> </li>
          <li className= 'nav-link-list'> <Link to="/library">Library </Link> </li>
          <li className= 'nav-link-list'> <Link to="/customers">Customers </Link> </li>
          </ul>
        </nav>
        <h1 className = 'welcome-banner'> Welcome to BINGE! </h1>
        <div >
          Selected Movie {selectedVideo? selectedVideo.title : 'nothing selected'}

          <br/>
          Selected Customer: {selectedCustomer? selectedCustomer.name : 'nothing selected'}
          <br/>
          <button onClick={onCheckout}> Checkout </button>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/search">
            <Search />
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
  return <h2>Home</h2>;
}

function SearchVideo() {
  return <h2>Search Video</h2>;
}

function LibraryList() {
  return <h2>Library</h2>;
}

function CustomersList() {
  return <h2>Customers</h2>;
}

export default App; 
