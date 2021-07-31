// import './styles/app.css';
import { useState } from 'react';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState(defaultTasks);

  const completeTaskBtnHandler = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      const completed = !task.completed;
      return task.id === taskId ? { ...task, completed } : task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <NewTaskForm />
      <TaskList tasks={tasks} completeTaskBtnHandler={completeTaskBtnHandler} />
    </div>
  );
}

const defaultTasks = [
  {
    id: 1,
    completed: false,
    task: 'buy pickle buy pickle buy pickle buy pickle',
  },
  { id: 2, completed: true, task: 'buy ketchup' },
];
