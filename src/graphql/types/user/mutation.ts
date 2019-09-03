export const UserMutation = `
    type UserMutation {
      createUser (
        user: NewUserPatch!
      ): User
      updateUser {
        id: String!
        patch: UserPatch!
      }: User
    }
`;
