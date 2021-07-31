// import './styles/app.css';

import NewTaskForm from './components/NewTaskForm';

const tasks = [
  {
    id: 1,
    completed: false,
    task: 'buy pickle buy pickle buy pickle buy pickle',
  },
  { id: 2, completed: true, task: 'buy ketchup' },
];
function App() {
  return (
    <div className="container">
      <NewTaskForm />
      {tasks.map(({ task, completed }) => (
        <div className={`task ${completed && 'task--completed'}`}>
          <button className="task__button" />
          <p>{task}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
