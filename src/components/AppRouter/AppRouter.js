import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import TodoList from '../TodoList/TodoList';
import PureTodoList from '../PureTodoList/PureTodoList';
import MemoizedTodoList from '../MemoizedTodoList/MemoizedTodoList';

const AppRouter = props => (
  <Router>
    <Switch>
      <Route exact path="/" render={_ => <LandingPage />} />
      <Route exact path="/wasteful" render={_ => <TodoList />} />
      <Route exact path="/pure" render={_ => <PureTodoList />} />
      <Route exact path="/memoized" render={_ => <MemoizedTodoList />} />
    </Switch>
  </Router>
);

export default AppRouter;
