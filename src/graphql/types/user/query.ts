export const UserQuery = `
    extend type Query {
        users: [User]
        user(id: String!): User
    }
`;
