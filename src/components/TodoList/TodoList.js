import React from 'react';
import Item from '../Item/Item';
import { todos } from '../../todos';

import styles from './TodoList.module.css';

class TodoList extends React.Component {
  state = todos;

  toggleStatus = itemId => {
    const { [itemId]: item } = this.state.todos;
    this.setState({
      todos: {
        ...this.state.todos,
        [itemId]: {
          ...item,
          done: !item.done
        }
      }
    });
  };

  removeItem = itemId => {
    const { [itemId]: _, ...theRest } = this.state.todos;
    this.setState({
      todos: theRest
    });
  };

  render() {
    return (
      <div className={styles.todoList}>
        {Object.keys(this.state.todos).map(itemId => {
          const { [itemId]: item } = this.state.todos;
          return (
            <Item
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
  }
}

export default TodoList;
