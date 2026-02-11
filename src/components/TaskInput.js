function TaskInput({ input, setInput, addTask }) {
  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && addTask()}
        placeholder="Enter task"
        className="task-input"
      />
      <button onClick={addTask} className="btn-add">Add</button>
    </div>
  );
}

export default TaskInput;
