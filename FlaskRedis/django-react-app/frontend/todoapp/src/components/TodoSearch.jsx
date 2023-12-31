import React from 'react'
import { useForm } from 'react-hook-form'

const TodoSearch = ({ add_todo }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    return (
        <div className="todo-search">
            <form action="" onSubmit={handleSubmit((data) => {
                add_todo(data);
                reset()
            })}>

                <input type="text" placeholder="Enter Todo Item" {...register("title", { required: true })}></input>
                <input type="text" placeholder="Enter Todo Description" {...register("description", { required: true })}></input>
                <input type="checkbox" {...register("completed", { required: false })} style={{ width: '20px', height: '20px' }} />
                <label>Completed</label>
                <input type="checkbox" {...register("updated", { required: false })} style={{ width: '20px', height: '20px' }} />
                <label>Updated</label>

                <button>Add</button>
            </form>
            {errors.Task?.type == "required" && <small>This Field can not be blank</small>}
        </div >
    )
}

export default TodoSearch
