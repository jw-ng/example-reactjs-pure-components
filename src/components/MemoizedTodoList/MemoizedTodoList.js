import React from 'react';
import MemoizedItem from '../MemoizedItem/MemoizedItem';
import { todos as initialTodos } from '../../todos';

import styles from './MemoizedTodoList.module.css';

const MemoizedTodoList = () => {
  const [todos, setTodos] = React.useState(initialTodos);

  const toggleStatus = itemId => {
    const { [itemId]: item } = todos;
    setTodos({
      ...todos,
      [itemId]: {
        ...item,
        done: !item.done
      }
    });
  };

  const removeItem = itemId => {
    const { [itemId]: _, ...theRest } = todos;
    setTodos(theRest);
  };

  return (
    <div className={styles['todo-list']}>
      {Object.keys(this.state.todos).map(itemId => {
        const { [itemId]: item } = this.state.todos;
        return (
          <MemoizedItem
            key={itemId}
            id={itemId}
            description={item.description}
            done={item.done}
            toggleStatus={this.toggleStatus}
            removeItem={this.removeItem}
          />
        );
      })}
    </div>
  );
};

export default MemoizedTodoList;
