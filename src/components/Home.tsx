import React, { useState } from 'react'
import InputField from './InputField';
import { Todo } from './model';
import TodoList from './TodoList';

const Home = () => {
    const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);
    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
            setTodo("");
        }
    }
    return (
        <div className='App'>
            <span className='heading'> Taskfy</span>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default Home