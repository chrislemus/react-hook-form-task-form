export default function TaskList({ tasks, completeTaskBtnHandler }) {
  return (
    <div>
      {tasks.map(({ label, completed, id }) => (
        <div key={id} className={`task ${completed && 'task--completed'}`}>
          <button
            className="task__complete-button"
            onClick={() => completeTaskBtnHandler(id)}
          />
          <p className="task__label">{label}</p>
          <button
            className="task__delete-button"
            onClick={() => completeTaskBtnHandler(id)}
          >
            🗑
          </button>
        </div>
      ))}
    </div>
  );
}
