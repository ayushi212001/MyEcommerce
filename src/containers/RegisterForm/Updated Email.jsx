import React, { useState } from 'react';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import AlternateEmailIcon from 'mdi-react/AlternateEmailIcon';
import { Button, Alert } from 'reactstrap';

const RegisterForm = () => {
  const [IsPasswordShown, setIsPasswordShown] = useState(false);

  const toggleShowPassword = (e) => {
    e.preventDefault();
    setIsPasswordShown(!IsPasswordShown);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Alert
        color="danger"
        isOpen={!!errorMessage}
      >
        {errorMessage}
      </Alert>
      <div className="form__form-group">
        <span className="form__form-group-label">Username</span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <AccountOutlineIcon />
          </div>
          <input
            name="username"
            type="text"
            placeholder="Enter your Username HERE"
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">E-mail</span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <AlternateEmailIcon />
          </div>
          <input
            name="email"
            type="email"
            placeholder="EmailAddress@mail.com"
          />
        </div>
      </div>
      <div className="form__form-group form__form-group--forgot">
        <span className="form__form-group-label">Password</span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <KeyVariantIcon />
          </div>
          <input
            name="password"
            type={IsPasswordShown ? 'text' : 'password'}
            placeholder="........"
          />
          <button
            
            className={`form__form-group-button${showPassword ? ' active' : ''}`}
            onClick={toggleShowPassword}
            type="button"
          ><EyeIcon />
          </button>
        </div>
      </div>
      <div className="account__btns register__btns">
        <Button type="Submit" color="primary" className="account__btn">
          Sign Up
        </Button>
      </div>
    </form>
  );
};


export default RegisterForm;
