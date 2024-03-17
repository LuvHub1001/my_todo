import "./TodoItem.css";
const TodoItem = ({ id, isDone, content, date, onUpdate, onRemove }) => {
  const handleUpdateItem = () => {
    onUpdate(id);
  };

  const handleDeleteBtn = () => {
    window.confirm("삭제하시겠습니까?") ? onRemove(id) : "";
  };

  return (
    <div className="todoItem">
      <input type="checkbox" checked={isDone} onChange={handleUpdateItem} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={handleDeleteBtn}>삭제</button>
    </div>
  );
};
export default TodoItem;
