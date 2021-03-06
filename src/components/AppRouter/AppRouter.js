import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoList from '../TodoList/TodoList';
import PureTodoList from '../PureTodoList/PureTodoList';
import MemoizedTodoList from '../MemoizedTodoList/MemoizedTodoList';
import Footer from '../Footer/Footer';

const AppRouter = props => (
  <Router>
    <Switch>
      <Route exact path="/" render={_ => <Footer />} />
      <Route exact path="/wasteful" render={_ => <TodoList />} />
      <Route exact path="/pure" render={_ => <PureTodoList />} />
      <Route exact path="/memoized" render={_ => <MemoizedTodoList />} />
    </Switch>
  </Router>
);

export default AppRouter;
