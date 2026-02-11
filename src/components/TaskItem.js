function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <li className="task-item">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleComplete(task.id)}
        className="task-checkbox"
      />
      <span className={task.completed ? "task-text completed" : "task-text"}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} className="btn-delete">
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
