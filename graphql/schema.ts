import gql from 'graphql-tag';

export const typeDefs = gql`
	type Todo {
		id: ID!
		title: String!
		completed: Boolean!
		createdAt: String!
	}
	type Query {
		todo(id: ID!): Todo
		todos: [Todo]
	}
	type Mutations {
		addTodo(title: String): Todo
		updateTodo(id: ID!, title: String): Todo
		deleteTodo(id: ID!): Todo
	}
`;
