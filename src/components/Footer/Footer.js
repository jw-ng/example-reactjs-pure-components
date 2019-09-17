import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
  return (
    <>
      <h4>Available versions:</h4>
      <ul>
        <li>
          <Link to="/wasteful">Wasteful version</Link>
        </li>
        <li>
          <Link to="/pure">React.PureComponent version</Link>
        </li>
        <li>
          <Link to="/memoized">React.memo version</Link>
        </li>
      </ul>
    </>
  );
};

export default Footer;
