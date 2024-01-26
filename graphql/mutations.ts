import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
	mutation CreateTodo($title: String!) {
		todo(title: $title) {
			id
			title
			completed
			createdAt
		}
	}
`;
export const UPDATE_TODO = gql`
	mutation UpdateTodo($id: ID!, $title: String!) {
		updateTodo(id: $id, title: $title) {
			id
			title
			completed
			createdAt
		}
	}
`;
export const DELETE_TODO = gql`
	mutation DeleteTodo($id: ID!) {
		deleteTodo(id: $id) {
			id
			title
			completed
			createdAt
		}
	}
`;
