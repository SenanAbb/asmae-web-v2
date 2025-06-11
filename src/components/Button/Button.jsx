import './Button.css';

export const Button = ({ text, type, onClick, style, disabled }) => {
  return (
    <button
      className={`button ${type}`}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
