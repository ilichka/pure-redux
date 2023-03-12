import React from 'react';
import UserList from "./components/user-list/user-list.component";
import TodoList from "./components/todo-list/todo-list.component";

function App() {
  return (
      <div>
        <UserList/>
        <hr/>
          <TodoList/>
      </div>
  );
}

export default App;
