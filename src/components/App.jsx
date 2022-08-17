import React, { Component } from 'react';
// import Counter from './Counter/Counter';
// import Dropdown from './Dropdown/Dropdown';
// import TodoList from './TodosList/TodosList';
// import initialTodos from './todos.json';

class App extends Component {
  state = {
    // todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    // console.log(completedTodosCount);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* <Counter /> */}
        {/* <Dropdown /> */}

        {/* <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}

        {/* <div> */}
        {/* <span>Total number of Todos: {totalTodoCount} </span> */}
        {/* <span>Number of completed Todos: {completedTodosCount} </span> */}
        {/* </div> */}
      </div>
    );
  }
}
export default App;
