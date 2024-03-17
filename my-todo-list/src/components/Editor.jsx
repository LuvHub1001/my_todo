import { useState, useRef } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  const EditorRef = useRef();
  const [content, setContent] = useState("");

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmitBtn = () => {
    if (content === "") {
      EditorRef.current.focus();
    }
    onCreate(content);
    setContent("");
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) handleSubmitBtn();
  };

  return (
    <div className="editor">
      <input
        ref={EditorRef}
        value={content}
        onChange={handleChangeContent}
        onKeyDown={handleKeyDown}
        placeholder="Todo..."
      />
      <button onClick={handleSubmitBtn}>입력</button>
    </div>
  );
};
export default Editor;
