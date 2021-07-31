// import './styles/app.css';
import { useState } from 'react';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';

const uniqueId = () => Math.floor(Math.random() * Date.now());

export default function App() {
  const [tasks, setTasks] = useState(defaultTasks);

  const completeTaskBtnHandler = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      const completed = !task.completed;
      return task.id === taskId ? { ...task, completed } : task;
    });
    setTasks(updatedTasks);
  };

  const newTaskHandler = (label) => {
    const newTask = {
      id: uniqueId(),
      completed: false,
      label,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <NewTaskForm newTaskHandler={newTaskHandler} />
      <TaskList tasks={tasks} completeTaskBtnHandler={completeTaskBtnHandler} />
    </div>
  );
}

const defaultTasks = [
  {
    id: 1,
    completed: false,
    label: 'buy pickle buy pickle buy pickle buy pickle',
  },
  { id: 2, completed: true, label: 'buy ketchup' },
];
