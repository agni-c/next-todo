'use client';

import { TodoType } from '@/app/data';
import React, { FormEvent, useState } from 'react';

type TodoCreatorProps = {
	todos: TodoType[];
	setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};
const TodoCreator = ({ todos, setTodos }: TodoCreatorProps) => {
	const [todoInput, setTodoInput] = useState('');

	const addTodo = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (todoInput.length < 1) return;
		setTodos([
			...todos,
			{ id: todos.length + 1, title: todoInput, completed: false }
		]);
		setTodoInput('');
	};
	return (
		<form className='todo-creator' onSubmit={e => addTodo(e)}>
			<input
				className='todo-input'
				type='text'
				placeholder='Enter todo'
				required={true}
				onChange={e => setTodoInput(e.target.value)}
				value={todoInput}
			/>
			<button className='add-todo' type='submit'>
				Add
			</button>
		</form>
	);
};

export default TodoCreator;
