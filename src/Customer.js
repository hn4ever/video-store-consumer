import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Customer.css';

const Customer = (props) => {
    const API_URL_BASE = props.url + '/customers'
    const [customersList, setCustomesList] = useState([])
    const [errorMessage, setErrorMessage] = useState(null);

}


