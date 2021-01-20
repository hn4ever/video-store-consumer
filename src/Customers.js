import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import './App.css';
import Customer from './Customers';


const Customers = (props) => {

    const API_URL_CUSTOMER = props.url + '/customers'

    const [customersList, setCustomersList] = useState([])
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
    axios.get(API_URL_CUSTOMER)
        .then( (response) => {
        const customersResponseData = response.data.map((customer) => {
            return ( < Customer
                key = {customer.id}
                id = {customer.id}
                name = {customer.name}
                phone = {customer.phone}
                account_credit = {customer.account_credit}
                videos_checked_out_count = {customer.videos_checked_out_count}
                onSelectCustomerCallback = {props.onSelectCustomerCallback}
                /> );
        });
        setCustomersList(customersResponseData);
        })
        .catch((error) => {
            setErrorMessage(error.message);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [customersList]);

    return (
        <div className = 'customers'>
            <h1 className = 'customer-header'>All Customers</h1>
            {customersList}
        </div>
    )
}

// Proptypes here 

export default Customers; 
