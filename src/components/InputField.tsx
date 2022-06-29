import React, { useRef } from 'react';
import './style.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className='input' onSubmit={ (e) =>{
            handleAdd(e);
            inputRef.current?.blur();
        }}>
            <input type="input" ref={inputRef} className='input__box'
                placeholder='Enter as task'
                value={todo}
                onChange={(e) => setTodo(e.target.value)} />
            <button type="submit" className='input_submit'>Go</button>
        </form>
    )
}
export default InputField;
