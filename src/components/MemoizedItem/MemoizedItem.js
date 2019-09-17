import React from 'react';

import styles from './MemoizedItem.module.css';

const MemoizedItem = React.memo(props => {
  const { id, description, done, toggleStatus, removeItem } = props;
  console.log(`rendering <MemoizedItem id="${id}"/>`);

  return (
    <div className={styles.item}>
      <input
        type="checkbox"
        id={`item-${id}`}
        checked={done}
        onChange={() => {
          toggleStatus(id);
        }}
      />
      <span className={styles.description}>{description}</span>
      <button
        onClick={() => {
          removeItem(id);
        }}
      >
        X
      </button>
    </div>
  );
});

export default MemoizedItem;
