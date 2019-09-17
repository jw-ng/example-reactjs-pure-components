import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <ul>
    <li>
      <Link to="/wasteful">Non-optimised version</Link>
    </li>
    <li>
      <Link to="/pure">React.PureComponent version</Link>
    </li>
    <li>
      <Link to="/memoized">React.memo version</Link>
    </li>
  </ul>
);

export default LandingPage;
