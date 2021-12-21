const Burger = ({ width, height, color, secondColor, ...props }) => (
  <svg
    width={width || '22'}
    height={height || '11'}
    viewBox="0 0 22 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1 0.5H21" stroke={'#1E1E1E'} strokeLinecap="round" />
    <path d="M1 5.5H21" stroke={'#6013FB'} strokeLinecap="round" />
    <path d="M1 10.5H21" stroke={'#FAD40A'} strokeLinecap="round" />
  </svg>
);

export default Burger;
