import React from 'react';
import PropTypes from 'prop-types';

import General from './General';
import Message from './Message';

const Layout = ({ layout, ...props }) => {
  switch (layout) {
    case 'message':
      return <Message {...props} />;
    case 'general':
    default:
      return <General {...props} />;
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
