import React from 'react';
import Todo from './todo';

const TodoList = ({ todos, toggleTodos }) => {
    return (
        <>
            {todos.map(todo => <Todo key={todo.id} todo={todo} toggleTodos={toggleTodos}></Todo>)}
        </>
    )
}

export default TodoList;