export const UserQuery = `
    type UserQuery {
        users: [User]
        user(id: String!): User
    }
`;
