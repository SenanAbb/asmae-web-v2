import './Button.css';

export const Button = ({ text, type, onClick }) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {text}
    </button>
  );
};
