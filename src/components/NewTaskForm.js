export default function NewTaskForm() {
  return (
    <form className="new-task-input-wrapper">
      <label htmlFor="task">New Task</label>
      <input id="task" name="task" />
      <button>add</button>
    </form>
  );
}
