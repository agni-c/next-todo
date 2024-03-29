import { gql } from '@apollo/client';

export const GET_TODOS = gql`
	query Todos {
		todos {
			id
			title
			completed
			createdAt
		}
	}
`;
export const GET_TODO = gql`
	query Todo($id: ID!) {
		todo(id: $id) {
			id
			title
			completed
			createdAt
		}
	}
`;
