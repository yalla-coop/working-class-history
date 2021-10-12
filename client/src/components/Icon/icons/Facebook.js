const Facebook = ({ width, height, color, ...props }) => (
  <svg
    width={width || '32'}
    height={height || '32'}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 16.085C30 8.35371 23.7312 2.08496 16 2.08496C8.26875 2.08496 2 8.35371 2 16.085C2 23.0725 7.11875 28.8643 13.8125 29.9156V20.1331H10.2569V16.085H13.8125V13.0006C13.8125 9.49246 15.9031 7.55309 19.1006 7.55309C20.6325 7.55309 22.235 7.82684 22.235 7.82684V11.2725H20.4687C18.7306 11.2725 18.1869 12.3512 18.1869 13.46V16.085H22.0694L21.4494 20.1331H18.1875V29.9168C24.8812 28.8662 30 23.0743 30 16.085Z"
      fill={color || 'white'}
    />
  </svg>
);

export default Facebook;
