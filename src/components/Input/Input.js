import './Input.scss';

const Input = props => {
  const { className, type, placeholder, onChange } = props;
  return (
    <div className="input">
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
