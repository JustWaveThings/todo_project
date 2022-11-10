# todo_project
 Simple todo app using local storage

## Project Requirements
<https://www.theodinproject.com/lessons/node-path-javascript-todo-list>

### Initial Planning Thoughts

- Nothing crazy fancy, UI or in functionality. Going for an MVP.
- Keep working towards goal of modular, reusuable code that for the most part is SOLID - with the main focus on Single Responsibility (S) and Loose Coupling (D)
- Implement a pub/sub architecture design / design pattern in this project
- Build with Webpack
- First time working with local storage
- 


### Properties to include in ToDo object

- record key/hash (md5 or something)
- title
- description
- due date 
- due status (upcoming, today, overdue)
- priority flag (normal / high) (bool)
- todo completion status (bool)
- project todo belongs to (defaults to default project)
- creation date / time (for sort)
- last modified date / time (for sort)
  
### Required Views

- view all projects
- view all todos in each project (Project Title, todo title and duedate with a color applied for high priority)
- expand a todo to see and edit details
- delete todo 
- delete project (not actually in requirements but not having that is wonky) assigned todo's for project go back to default project

### localStorage tips

- make function that checks localstorage for data when app is first loaded
- make function that saves / updates when todo's or projects are edited
- handle there not being any localstorage data to prevent crash
- its JSON, so don't try to store methods 