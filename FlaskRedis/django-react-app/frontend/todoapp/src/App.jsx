import { useEffect, useState } from 'react'

import './App.css'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'
import TodoSearch from './components/TodoSearch'

import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([])
  const [errors, setErrors] = useState("")

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/todos')
      .then(res => setTodos(res.data))
      .catch(error => setErrors(error.message));
  }, []);


  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
    const originalTodos = [...todos]
    axios.delete('http://127.0.0.1:8000/todos/' + id).catch(err => {
      setErrors(errors.message)
      setTodos(originalTodos)
    })

  }

  // to add new tsk
  const addTodo = (data) => {
    setTodos([...todos, data = { ...data }])
    const originalTodos = [...todos]

    axios.post("http://127.0.0.1:8000/todos", data).then(res => setTodos([...todos, res.data])).catch(err => {
      setErrors(errors.message)
      setTodos(originalTodos)
    })
    console.log(data, "da aeat")
  }

  const updateTodo = (e, id, text, todos) => {
    e.preventDefault()
    const todo = todos[id]
    const updateUser = { ...todo, title: text }
    setTodos(todos.map(t => t.id == id ? updateUser : t))

  }


  return (
    <div className="Todo-container">
      {errors && <p>{errors}</p>}

      <TodoFilter />
      <TodoSearch add_todo={addTodo} />
      <TodoList todos={todos} delete_todo={deleteTodo} />

    </div>
  )
}

export default App
