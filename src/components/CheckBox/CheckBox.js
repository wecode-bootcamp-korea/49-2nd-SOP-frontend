import './CheckBox.scss';

const CheckBox = props => {
  const { children, onChange, checked } = props;

  return (
    <div className="checkBoxContainer">
      <label>
        <input
          className="checkBox"
          type="checkbox"
          checked={checked}
          onChange={({ target: { checked } }) => onChange(checked)}
        />
        {children}
      </label>
    </div>
  );
};

export default CheckBox;
