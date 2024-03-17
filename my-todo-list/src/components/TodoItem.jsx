import "./TodoItem.css";
const TodoItem = ({ id, isDone, content, date, onUpdate }) => {
  const handleUpdateItem = () => {
    onUpdate(id);
  };

  return (
    <div className="todoItem">
      <input type="checkbox" checked={isDone} onChange={handleUpdateItem} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};
export default TodoItem;
