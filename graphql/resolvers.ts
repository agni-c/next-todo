import { Context } from '@/pages/api/graphql';

const resolvers = {
	Query: {
		todos: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.todo.findMany({});
		}
	},
	Mutations: {
		addTodo: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.todo.create({
				data: {
					title: args.title
				}
			});
		},
		updateTodo: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.todo.update({
				where: {
					id: args.id
				},
				data: {
					title: args.title
				}
			});
		},
		deleteTodo: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.todo.delete({
				where: {
					id: args.id
				}
			});
		}
	}
};
export default resolvers;
