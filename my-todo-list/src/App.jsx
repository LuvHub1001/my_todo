import { useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";

function App() {
  const [todo, setTodo] = useState([]);
  const idRef = useRef(1);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodo([newTodo, ...todo]);
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((item) =>
        item.id === targetId ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const onRemove = (targetId) => {
    setTodo(todo.filter((item) => item.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todo={todo} onUpdate={onUpdate} onRemove={onRemove} />
    </div>
  );
}

export default App;
