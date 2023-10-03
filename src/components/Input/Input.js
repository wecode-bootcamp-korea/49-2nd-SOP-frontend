import './Input.scss';

const Input = props => {
  const { className, type, placeholder, onChange, value } = props;

  return (

    <div className="inputContainer">
      <input
        className={`input ${className}`}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      <label htmlFor="input" className="inputLabel">
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
