import React from 'react';

const AddTodo = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="todo"></label>
            <input type="text" name="todo" value={props.currTodo} onChange={props.handleChange} /><br/>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodo;