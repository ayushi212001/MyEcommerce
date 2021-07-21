import React from 'react';
import LogInForm from './components/LogInForm';

const LogIn = () => (
  <div className="account">
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__head">
          <h3 className="account__title">Welcome to DoorStep Delhi
          </h3>
          <h4 className="account__subhead subhead">Seller Portal</h4>
        </div>
        <LogInForm />
      </div>
    </div>
  </div>
);

export default LogIn;
