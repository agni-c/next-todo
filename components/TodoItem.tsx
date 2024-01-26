import { TodoType } from '@/app/data';
import { useEffect, useRef, useState } from 'react';

type TodoItemProps = {
	todo: TodoType;
	setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};
const TodoItem = ({ todo, setTodos }: TodoItemProps) => {
	const [isEditMode, setIsEditMode] = useState(false);
	const [editInput, setEditInput] = useState('');
	const editInputRef = useRef<HTMLInputElement | null>(null);

	const handleCheck = (id: number) => {
		console.log('check clicked');
		// use the idx to change the data

		setTodos(prevList =>
			prevList.map(todo =>
				todo.id !== id
					? todo
					: { ...todo, completed: !todo.completed }
			)
		);
	};
	const editTodo = (id: number) => {
		setTodos(prevList =>
			prevList.map(todo =>
				todo.id !== id ? todo : { ...todo, title: editInput }
			)
		);
		setEditInput('');
		setIsEditMode(false);
	};
	const deleteTodo = (id: number) => {
		setTodos(prevList => prevList.filter(todo => todo.id !== id));
	};
	useEffect(() => {
		editInputRef.current?.focus();
	}, [isEditMode]);

	return isEditMode ? (
		<div
			key={todo.id}
			className={`todo-item ${
				isEditMode ? 'bg-orange-400' : 'bg-orange-400'
			} `}>
			<label htmlFor='todoEditInput' className='hidden'>
				todo check
			</label>
			<input
				ref={editInputRef}
				id='todoEditInput'
				className='todo-edit-input flex-grow px-2 outline-orange-500'
				type='text'
				value={editInput}
				onChange={e => setEditInput(e.target.value)}
			/>

			<div className='todo-actions'>
				<button onClick={() => editTodo(todo.id)}>Done</button>
			</div>
		</div>
	) : (
		<div
			key={todo.id}
			className={`todo-item ${
				isEditMode ? 'bg-gray-100' : 'bg-orange-400'
			}  `}>
			<label htmlFor='todoCheckInput'></label>
			<input
				id='todoCheckInput'
				className='todo-item-checkbox'
				type='checkbox'
				autoFocus
				checked={todo.completed}
				onChange={() => handleCheck(todo.id)}
			/>
			<p
				className={`todo-item-text ${
					todo.completed ? 'line-through text-gray-500' : ''
				}`}>
				{todo.title}
			</p>
			<div className='todo-actions'>
				<button
					onClick={() => {
						setEditInput(todo.title);
						setIsEditMode(true);
						editInputRef.current?.focus();
					}}>
					Edit
				</button>
				<button onClick={() => deleteTodo(todo.id)}>Delete</button>
			</div>
		</div>
	);
};

export default TodoItem;
