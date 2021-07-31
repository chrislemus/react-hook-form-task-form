export default function TaskList({ tasks, completeTaskBtnHandler }) {
  return (
    <div>
      {tasks.map(({ task, completed, id }) => (
        <div key={id} className={`task ${completed && 'task--completed'}`}>
          <button
            className="task__button"
            onClick={() => completeTaskBtnHandler(id)}
          />
          <p>{task}</p>
        </div>
      ))}
    </div>
  );
}
