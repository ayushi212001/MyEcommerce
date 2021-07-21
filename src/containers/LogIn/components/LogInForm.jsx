import React, { useState } from 'react';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import PhoneOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { Link } from 'react-router-dom';
import CheckBox from '../../../shared/components/form/CheckBox';

const LogInForm = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isToggleCheckboxEnabled, setIsToggleCheckboxEnabled] = useState(false);

  const handleShowPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const handleToggleCheckBox = () => {
    setIsToggleCheckboxEnabled(!isToggleCheckboxEnabled);
  };

  return (
    <form className="form">
      <div className="form__form-group">
        <span className="form__form-group-label">Mobile</span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <PhoneOutlineIcon />
          </div>
          <input
            name="mobile-no"
            type="numbers"
            placeholder="1234567890"
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Password</span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <KeyVariantIcon />
          </div>
          <input
            name="password"
            type={isPasswordShown ? 'text' : 'password'}
            placeholder="........"
          />
          <button
            className={`form__form-group-button${isPasswordShown ? ' active' : ''}`}
            onClick={() => handleShowPassword()}
            type="button"
          ><EyeIcon />
          </button>
        </div>
        <div className="account__forgot-password">
          <a href="/">Forgot password?</a>
        </div>
      </div>
      <div className="form__form-group">
        <div className="form__form-group-field">
          <CheckBox 
            name="remember_me"
            label="Remember me"
            value={isToggleCheckboxEnabled}
            onChange={handleToggleCheckBox}
          />
        </div>
      </div>
      <Link className="btn btn-primary account__btn account__btn--small" to="/dashboard">Sign In</Link>
      <Link className="btn btn-outline-primary account__btn account__btn--small" to="/log_in">Create Account</Link>
    </form>
  );
};

export default LogInForm;
