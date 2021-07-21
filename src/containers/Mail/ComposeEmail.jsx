import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, ButtonToolbar } from 'reactstrap';
import TextEditor from './components/EmailConfirmation';

const renderTextEditor = ({ input }) => (
  <TextEditor {...input} />
);

renderTextEditor.propTypes = {
  input: PropTypes.shape().isRequired,
};

const ComposeEmail = ({ handleSubmit, reset }) => (
  <form className="form inbox__content" onSubmit={handleSubmit}>
    <h5 className="inbox__compose-title bold-text">Compose new message/email</h5>
    <div className="form__form-group">
      <div className="form__form-group-field">
        <input
          name="to"
          type="text"
          placeholder="To:"
        />
      </div>
    </div>
    <div className="form__form-group">
      <div className="form__form-group-field">
        <input
          name="subject"
          type="text"
          placeholder="Subject:"
        />
      </div>
    </div>
    <div className="form__form-group" dir="ltr">
      <Field
        name="text"
        component={renderTextEditor}
      />
    </div>
    <div className="form__form-group">
      <Button
        outline
        onClick={(e) => {
          e.preventDefault();
        }}
        className="inbox__files-btn"
        size="sm"
      >Attach files
      </Button>
    </div>
    <ButtonToolbar className="form__button-toolbar">
      <Button color="primary" type="submit">Send</Button>
      <Button type="button" onClick={reset}>Cancel</Button>
    </ButtonToolbar>
  </form>
);

ComposeEmail.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default ComposeEmail;
