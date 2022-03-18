import Item from "./Item.js";
import "./TodolistList.css";

// { listData}接收父元件
function TodolistList({ listData, deleteItem }) {
  
  var list = listData;
  return (
    <div className="list">
      {list.map(
        (item, idx) => (
          <Item item={item} deleteItem={deleteItem} key={idx} />
        )
        //已經import Item from './Item.js'
        // map不要加大括號{}
      )}
    </div>
  );
}

export default TodolistList;
