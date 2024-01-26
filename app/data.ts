export const todosData = [
	{
		id: 1,
		title: 'Learn Angular',
		completed: true
	},
	{
		id: 2,
		title: 'Learn React',
		completed: false
	},
	{
		id: 3,
		title: 'Learn Vue',
		completed: false
	}
];
export type TodoType = (typeof todosData)[0];
