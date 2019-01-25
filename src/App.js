import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo} from './action/action';
import AddTodo from './AddTodo';
import TodoList from './TodoList';



class App extends Component {
  render() {
    //action'u çalıştırmak için dispatch methoduna ihtyyaiç var
    const {dispatch,eklenmisTodos} = this.props;

    return (
      <div className="App container">

        <AddTodo onAddClick={text=>dispatch(addTodo(text))} />
        <TodoList todos={eklenmisTodos} />
      </div>
    );
  }
}



function select(state){
  return{
    eklenmisTodos:state.todos

  }
}

export default connect(select)(App);
