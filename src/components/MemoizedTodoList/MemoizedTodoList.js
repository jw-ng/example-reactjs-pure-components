import React from 'react';
import { initialState } from '../../todos';
import MemoizedItem from '../MemoizedItem/MemoizedItem';
import Footer from '../Footer/Footer';

import styles from './MemoizedTodoList.module.css';

const MemoizedTodoList = () => {
  const [todos, setTodos] = React.useState(initialState.todos);

  const toggleStatus = itemId => {
    console.log(`toggling status of item [${itemId}]`);
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
    console.log(`removing item [${itemId}]`);
    const { [itemId]: _, ...theRest } = todos;
    setTodos(theRest);
  };

  return (
    <div className={styles['todo-list']}>
      <h3>Todo list:</h3>
      {Object.keys(todos).map(itemId => {
        const { [itemId]: item } = todos;
        return (
          <MemoizedItem
            key={itemId}
            id={itemId}
            description={item.description}
            done={item.done}
            toggleStatus={toggleStatus}
            removeItem={removeItem}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default MemoizedTodoList;
