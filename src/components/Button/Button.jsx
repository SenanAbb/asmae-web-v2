import './Button.css';

export const Button = ({ text, type, onClick, style }) => {
  return (
    <button className={`button ${type}`} onClick={onClick} style={style}>
      {text}
    </button>
  );
};
