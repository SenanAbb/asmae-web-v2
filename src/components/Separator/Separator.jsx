export const Separator = ({ style }) => {
  const baseStyle = {
    width: '15rem',
    margin: '0 auto',
    display: 'block',
  };

  return (
    <img
      src="/icons/separator3.svg"
      alt=""
      style={{ ...baseStyle, ...style }}
    />
  );
};
