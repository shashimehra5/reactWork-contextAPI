import React from "react";
import PropTypes from "prop-types";
const TextInputGroup = ({
  lable,
  name,
  value,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group input-without-border">
      <div className={error && 'invalid-field'}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={(value && 'filled') || (error && 'invalid-field')}
      />
      <label htmlFor={name}>{lable}</label>
      {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextInputGroup.defaultProps = {
  type: "text",
  label: "lable"
};

export default TextInputGroup;


export const TextAreaGroup = ({
    lable,
    name,
    value,
    onChange,
    error
  }) => {
    return (
      <div className="form-group input-without-border">
      <div className={error && 'invalid-field'}>
        <textarea rows="4" cols="50"
          name={name}
          value={value}
          onChange={onChange}
          className={(value && 'filled') || (error && 'invalid-field')}
        ></textarea>
        <label htmlFor={name}>{lable}</label>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
      </div>
    );
  };