import { useForm } from 'react-hook-form';
export default function NewTaskForm({ newTaskHandler }) {
  const { register, handleSubmit, reset } = useForm({ shouldUnregister: true });
  const onSubmit = (data) => {
    const taskLabel = data.label;
    newTaskHandler(taskLabel);
    reset();
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="task">New Task</label>
      <input id="task" name="task" {...register('label')} />
      <button type="submit">add</button>
    </form>
  );
}
