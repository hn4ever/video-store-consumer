import React from 'react';


const Customer = (props) => {

    const onSelect = () => {
        props.onSelectCustomerCallback(props.id);
    }

    return (
        <div className="customer">
        <h2>Details for {props.name}</h2>
        <ul>
            <p>Address: {props.address}, {props.city}, {props.state}-{props.postal_code}  </p>
            <p>Phone: {props.phone}</p>
            <p>Account Credit: {props.account_credit}</p>
            <p>Videos Checked Out: {props.videos_checked_out_count}</p>
        </ul>
        <button onClick={onSelect}> Select </button>
        </div>
    )
}


export default Customer; 
