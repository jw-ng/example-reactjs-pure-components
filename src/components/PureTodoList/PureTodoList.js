import React from 'react';
import { initialState } from '../../todos';
import PureItem from '../PureItem/PureItem';
import Footer from '../Footer/Footer';

import styles from './PureTodoList.module.css';

class PureTodoList extends React.Component {
  state = initialState;

  toggleStatus = itemId => {
    console.log(`toggling status of item [${itemId}]`);
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
    console.log(`removing item [${itemId}]`);
    const { [itemId]: _, ...theRest } = this.state.todos;
    this.setState({
      todos: theRest
    });
  };

  render() {
    return (
      <div className={styles['todo-list']}>
        <h3>Todo list:</h3>
        {Object.keys(this.state.todos).map(itemId => {
          const { [itemId]: item } = this.state.todos;
          return (
            <PureItem
              key={itemId}
              id={itemId}
              description={item.description}
              done={item.done}
              toggleStatus={this.toggleStatus}
              removeItem={this.removeItem}
            />
          );
        })}
        <Footer />
      </div>
    );
  }
}

export default PureTodoList;
