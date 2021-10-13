const Mastodon = ({ width, height, color, ...props }) => (
  <svg
    width={width || '32'}
    height={height || '32'}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M30 10.8494C30 4.34125 25.7337 2.43375 25.7337 2.43375C23.5812 1.44687 19.8875 1.03125 16.05 1H15.9556C12.1181 1.03125 8.42685 1.44687 6.2756 2.43375C6.2756 2.43375 2.00873 4.34125 2.00873 10.8494C2.00873 12.34 1.97998 14.1212 2.02685 16.0112C2.18185 22.375 3.19435 28.6481 9.08248 30.2056C11.7969 30.9237 14.1281 31.0737 16.005 30.9706C19.4093 30.7831 21.3175 29.7569 21.3175 29.7569L21.2056 27.2881C21.2056 27.2881 18.7725 28.055 16.0406 27.9612C13.3337 27.8687 10.4781 27.6694 10.0406 24.3481C9.99839 24.0395 9.97751 23.7284 9.9781 23.4169C11.9591 23.8591 13.9748 24.1278 16.0025 24.22C18.0619 24.3144 19.9925 24.0994 21.9537 23.8656C25.715 23.4169 28.99 21.1006 29.4012 18.985C30.0525 15.6512 30 10.8494 30 10.8494ZM24.9662 19.2344H21.8412V11.5862C21.8412 9.97375 21.1625 9.15562 19.805 9.15562C18.305 9.15562 17.5512 10.1262 17.5512 12.0456V16.2331H14.4475V12.0456C14.4475 10.1262 13.6975 9.15562 12.1937 9.15562C10.8362 9.15562 10.1575 9.97375 10.1575 11.5862V19.2344H7.03247V11.3544C7.03247 9.74396 7.44393 8.465 8.26685 7.5175C9.11685 6.57062 10.2294 6.085 11.6112 6.085C13.21 6.085 14.4206 6.69875 15.2206 7.9275L16 9.23062L16.7781 7.9275C17.5787 6.69875 18.7887 6.085 20.3875 6.085C21.7694 6.085 22.8818 6.57062 23.7318 7.5175C24.5564 8.46417 24.9679 9.74312 24.9662 11.3544V19.2344Z"
      fill={color || 'white'}
    />
  </svg>
);

export default Mastodon;
