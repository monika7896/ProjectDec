import React from 'react'
import { RiEditBoxFill } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";



const TodoList = ({ todos, delTodo, update_todo, complete_todo, filter_todo }) => {
    return (
        <div className="todo-list">

            {
                todos.map(todo => <div className="todo-list-item" key={todo.id}>
                    <div className="task">
                        <input type="checkbox" />
                        <p>{todo.title}</p>
                    </div>
                    <div className="btn-container">
                        <div className="edit"> <RiEditBoxFill /></div>
                        <div className="del"><RiDeleteBin5Line onClick={() => delete_todo(todo.id)} /></div>
                    </div>
                </div>
                )
            }
        </div >

    )
}

export default TodoList
