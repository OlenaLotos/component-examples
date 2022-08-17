import React, { Component } from 'react';
// import Counter from './Counter/Counter';
// import Dropdown from './Dropdown/Dropdown';
// import TodoList from './TodosList/TodosList';
// import initialTodos from './todos.json';
import Form from './Form/Form';

class App extends Component {
  state = {
    // todos: initialTodos,  //-------------- data for TODO component//
  };

  //---------------------------------- data for TODO component//
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  //---------------------------------- data for TODO component//

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    //---------------------------------- data for TODO component//
    // const { todos } = this.state;
    // const totalTodoCount = todos.length;
    // const completedTodosCount = todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0
    // );
    //---------------------------------- data for TODO component//

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
        <Form onSubmit={this.formSubmitHandler} />

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
