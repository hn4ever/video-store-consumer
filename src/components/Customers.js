import React from 'react';
// import PropTypes from 'prop-types';
import './App.css';
import Customer from './components/Customer';


const Customers = (props) => {
    console.log(props.customersList)
    const customersResponseData = props.customersList.map((customer) => {
        return ( < Customer
            key = {customer.id}
            id = {customer.id}
            name = {customer.name}
            address = {customer.address}
            city = {customer.city}
            state = {customer.state}
            postal_code = {customer.postal_code}
            phone = {customer.phone}
            account_credit = {customer.account_credit}
            videos_checked_out_count = {customer.videos_checked_out_count}
            onSelectCustomerCallback = {props.onSelectCustomerCallback}
            /> );
    });


    return (
        <div className = 'customers'>
            {customersResponseData}
        </div>
    )
}
    
// Proptypes here 

export default Customers; 
