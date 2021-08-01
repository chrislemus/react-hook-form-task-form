import { useForm } from 'react-hook-form';
export default function NewTaskForm({ newTaskHandler }) {
  const { register, handleSubmit, reset, formState, clearErrors } = useForm({
    shouldUnregister: true,
    defaultValues: {
      label: '',
    },
  });
  const onSubmit = (data) => {
    const taskLabel = data.label;
    newTaskHandler(taskLabel);
    reset();
    clearErrors();
  };

  const errors = Object.values(formState.errors);

  return (
    <form className="new-task-form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="task">New Task</label>
      <input
        id="task"
        {...register('label', {
          required: 'task cannot be blank',
          validate: {
            lessThanTwenty: (v) =>
              v.length <= 20 || 'Task cannot be longer than 20 characters.',
          },
        })}
      />
      <ul className="new-task-form__error-messages">
        {errors.map((error) => (
          <li>{error.message}</li>
        ))}
      </ul>
      <button
        type="submit"
        disabled={!formState.isValid || !formState.isDirty}
        className="new-task-form__submit-button"
      >
        add
      </button>
    </form>
  );
}
