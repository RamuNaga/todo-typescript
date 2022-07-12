import React, { useState } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import InputField from './InputField';
import { Todo } from './model';
import TodoList from './TodoList';

const Home = () => {
    const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);
    const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
            setTodo("");
        }
    }
    const onDragEnd = (result:DropResult) => {
        console.log(result);
        const {source,destination} = result;
        if(!destination) return;
        if(destination.droppableId === source.droppableId && destination.index === source.index) return;
        let add, active = todos, complete = completedTodos;

        if(source.droppableId === "TodoList"){
            add = active[source.index];
            active.splice(source.index,1);
        }else{
            add = complete[source.index];
            complete.splice(source.index,1)
        }

        if(destination.droppableId === "TodoList"){
            active.splice(destination.index,0,add);
        }else{
            complete.splice(destination.index,0,add);
        }
        setCompletedTodos(complete);
        setTodos(active);
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='App'>
                <span className='heading'>Taskfy</span>
                <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
                <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos}
                    setCompletedTodos={setCompletedTodos} />
            </div>
        </DragDropContext>

    )
}

export default Home