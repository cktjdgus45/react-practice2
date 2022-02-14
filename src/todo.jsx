import React from 'react';

const Todo = ({ todo, toggleTodos }) => {
    const handleChange = () => {
        toggleTodos && toggleTodos(todo.id);
    }
    return (
        <>
            <input type="checkbox" checked={todo.complete} onChange={handleChange} />
            <h1>{todo.name}</h1>
        </>
    )
}

export default Todo;