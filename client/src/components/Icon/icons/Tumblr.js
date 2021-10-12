const Tumblr = ({ width, height, color, ...props }) => (
  <svg
    width={width || '32'}
    height={height || '32'}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.375 2H7.5C4.42562 2 2 4.42562 2 7.5V24.375C2 27.4494 4.42562 30 7.5 30H24.375C27.4494 30 30 27.4494 30 24.375V7.5C30 4.42562 27.4494 2 24.375 2ZM21 24.75H17.75C15.0931 24.75 13.25 23.27 13.25 20V15H11V12C13.6569 11.3125 14.6219 8.98 14.75 7H17.5V11.5H20.75V15H17.5L17.4756 19.4069C17.4756 20.7737 18.1631 21.2462 19.2644 21.2462L21 21.25V24.75Z"
      fill={color || 'white'}
    />
  </svg>
);

export default Tumblr;
