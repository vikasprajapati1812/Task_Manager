import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';
import Form from './components/Form';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [filter, setFilter] = useState('All');

  // Keep localStorage in sync with task list
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };

    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  const toggleComplete = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case 'Active':
        return tasks.filter(task => !task.completed);
      case 'Completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <Form addTask={addTask} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={getFilteredTasks()}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
