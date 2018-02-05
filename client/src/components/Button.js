import React from 'react';

const Button = (props) => {
  return <button type="submit" className="button" style = {{ backgroundColor: props.color }}>
  {props.text}
  </button>;
};

export default Button;
