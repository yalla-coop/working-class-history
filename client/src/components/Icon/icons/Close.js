const Close = ({ width, height, color, secondColor, ...props }) => (
  <svg
    width={width || '18'}
    height={height || '18'}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.3575 1.64215L1.61394 16.3857"
      stroke={secondColor || '#FAD40A'}
      strokeWidth="1.32678"
      strokeLinecap="round"
    />
    <path
      d="M1.61334 1.64106L16.3569 16.3846"
      stroke={color || '#0E0F11'}
      strokeWidth="1.32678"
      strokeLinecap="round"
    />
  </svg>
);

export default Close;
