import React from 'react';
import TodoList from './components/TodoList/TodoList';
import PureTodoList from './components/PureTodoList/PureTodoList';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <h4>Todo list:</h4>
      <TodoList />
      <hr />
      <h4>Todo list of "pure components":</h4>
      <PureTodoList />
    </div>
  );
};

export default App;
