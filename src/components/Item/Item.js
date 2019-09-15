import React from 'react';

import styles from './Item.module.css';

class Item extends React.Component {
  render() {
    const { id, description, done, toggleStatus, removeItem } = this.props;
    console.log(`rendering <Item id="${id}"/>`);

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
  }
}

export default Item;
