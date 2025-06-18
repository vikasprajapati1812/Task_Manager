  # Task Management Application

A clean and simple task manager built with React. This app is all about helping you stay on top of your to-do list — whether it's daily work tasks, or anything in between. It's designed to be fast, minimal, and easy to use on any device.

Task Management Application A responsive and user-friendly Task Management application built entirely with React. It allows users to add, delete, complete and filter tasks. All task data is saved locally using localStorage for persistence even after page refresh.

# Live Demo
Deployed via Netlify — https://vikastaskmanagerapp.netlify.app/

# Some Screenshots how it looks.
## Website View
![alt text](screenshot1.jpeg)
## Mobile View
![alt text](screenshot2.jpg)

# Tech Skills
- React (using Create React App)
- JavaScript 
- CSS (without frameworks)
- localStorage for saving data (tasks) between sessions

# Main Features

1. Add new tasks with a title (and description is optional)
2. Mark tasks as complete or uncomplete
3. Delete tasks 
4. Filter by task status:
   All, Active, or Completed
5. Tasks persist across page reloads using localStorage

Additionals-
-Fully responsive design — works great on phones, tablets, and desktops
-Nice visual  like strikethroughs for completed tasks


## How I Built It.

I started by breaking the app down into components: App, Form, TaskList, TaskItem, and FilterButtons. From there, I built the core task-adding functionality first, then gradually added toggling, deleting, and filtering.

State management is handled using React’s built-in useState and useEffect hooks. For saving tasks, I used localStorage and synced it with the state every time a task was added, removed, or changed. All the styles are written in plain CSS, with a mobile-first approach.

Visit Netlify and sign in Click “Add new site” : “Import an existing project” Manually I choose file of built and 
upload Click "Deploy Site" After deploy 
change name of your site name

# Folder Structure

  task_management/
  
    build/ (Production build output)
    public/
    favicon.ico
    src/
      components/
        Form.js (Form to add new tasks)
        FilterButtons.js (Buttons for filtering and sorting)
        TaskItem.js (Individual task item)
        TaskList.js (List of all tasks)
  App.css (Global CSS)
  App.js (Main app logic)
  index.js (App entry point)
  package.json (Dependencies)
  README.md (Documentation)


# A Few Challenges faced

localStorage was a bit tricky — especially making sure state and storage always matched up without unnecessary re-renders.

Designing a smooth, user-friendly experience was also more tricky than expected — especially making sure everything felt right across screen sizes and when no tasks were added yet.

# Learning Experience

To make the data persist even after the page reload.
localStorage is a solid option for lightweight data persistence, but one need to be mindful about how and when you update it.

Filtering the data on the basis of All, Active and Completed was good.
I use to give the Linear Gradient which is actually a background color in the task. I learned it and implement it over in this application.
