import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todo, onUpdate, onRemove }) => {
  const [searchContent, setSearchContent] = useState("");
  const handleSearchContent = (e) => {
    setSearchContent(e.target.value);
  };

  const getFilterdData = () => {
    if (searchContent === "") {
      return todo;
    }
    return todo.filter((item) => {
      return item.content.toLowerCase().includes(searchContent.toLowerCase());
    });
  };

  const filterdTodo = getFilterdData();

  return (
    <div className="list">
      <h4>Todo List🌱</h4>
      <input
        value={searchContent}
        onChange={handleSearchContent}
        placeholder="검색어를 입력하세요"
      />
      <div className="todoWrapper">
        {filterdTodo.map((todoItem) => {
          return (
            <TodoItem
              key={todoItem.id}
              {...todoItem}
              onUpdate={onUpdate}
              onRemove={onRemove}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
