export const Separator = ({ style }) => {
  const baseStyle = {
    width: 'min(100%, 40rem)',
    margin: '0 auto',
    display: 'block',
  };

  return (
    <img
      src="/icons/separator4.svg"
      alt=""
      style={{ ...baseStyle, ...style }}
    />
  );
};
