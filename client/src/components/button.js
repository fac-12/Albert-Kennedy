export default Button = (props) => {
  return <button type="submit" className="button" onClick="" style = {{ backgroundColor: props.color }}>
  {props.text}
  </button>;
};
