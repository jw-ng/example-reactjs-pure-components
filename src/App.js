import React from 'react';
import AppRouter from './components/AppRouter/AppRouter';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <AppRouter />
    </div>
  );
};

export default App;
