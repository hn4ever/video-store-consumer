import React, { useState, useEffect } from 'react';
import axios from 'axios';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Customers from './components/Customers';
import Library from  './components/Library';

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
      console.log(response.data)
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
      <div>
        <nav>
          <ul>
          <li> <Link to="/">Home</Link> </li> 
          <li> <Link to="/searchVideo">Search </Link> </li>
          <li> <Link to="/library">Library </Link> </li>
          <li> <Link to="/customers">Customers </Link> </li>
          </ul>
        </nav>
        <h1> Videos Shop! </h1>
        <div>
          Selected Movie {selectedVideo? selectedVideo.title : ''}
          <br/>
          Selected Customer {selectedCustomer? selectedCustomer.name : ''}
          <br/>
          <button onClick={onCheckout}> Checkout </button>
        </div>
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

function LibraryList() {
  return <h2>Library</h2>;
}

function CustomersList() {
  return <h2>Customers</h2>;
}

export default App; 
