'use client';
import { todosData, TodoType } from './data';
import { Key, useState } from 'react';
import TodoItem from '@/components/TodoItem';
import TodoCreator from '@/components/TodoCreator';
import { useQuery } from '@apollo/client';
import { GET_TODOS } from '@/graphql/queries';

export default function Home() {
	const { data, loading, error } = useQuery(GET_TODOS);
	const [todos, setTodos] = useState(todosData);

	if (error) <pre>{error.message}</pre>;
	if (loading) <p>Loading...</p>;

	return (
		<div className='container'>
			<TodoCreator todos={todos} setTodos={setTodos} />
			<div className='todo-list'>
				{data?.todos?.map((todo: TodoType) => (
					<TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
				))}
			</div>
		</div>
	);
}
