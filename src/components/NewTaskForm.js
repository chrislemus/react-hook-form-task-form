export default function NewTaskForm() {
  return (
    <form className="new-task-form">
      <label htmlFor="task">New Task</label>
      <input id="task" name="task" />
      <button>add</button>
    </form>
  );
}
