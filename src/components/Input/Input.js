import './Input.scss';

const Input = props => {
  const { className, type, placeholder, onChange, value } = props;

  return (
    <>
      <input
        className={`input ${className}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {/* <label htmlFor="input" className="inputLabel">
        {label}
      </label> */}
    </>
  );
};

export default Input;
