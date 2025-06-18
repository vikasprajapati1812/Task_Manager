import React, { useState } from 'react';

const Form = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTask(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder=" Task Heading"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder=" Descriptions...."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button id='AddTask' type="submit">Add++</button>
    </form>
  );
};

export default Form;
