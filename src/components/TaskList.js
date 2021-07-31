export default function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map(({ task, completed }) => (
        <div className={`task ${completed && 'task--completed'}`}>
          <button className="task__button" />
          <p>{task}</p>
        </div>
      ))}
    </div>
  );
}
