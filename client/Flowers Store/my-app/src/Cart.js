import React from 'react';
import './Card.css';

function Card({ customers }) {
  return (
    <div>
   
      {customers.map((customer, index) => (
        <div  className={customer.age >= 30 ? 'older' : 'younger'}>
          <h3>{customer.name}</h3>
          <p>Department: {customer.department || 'N/A'}</p>
          <p>Age: {customer.age}</p>
          <p>Phone: {customer.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
