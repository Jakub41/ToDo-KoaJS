export const UserMutation = `
    extend type Mutation {
      createUser (
        user: NewUserPatch!
        {
          NewProfile
          (
            profile: Profile!
          )
        }
      ): User
      updateUser (
        id: String!
        patch: UserPatch!
      ): User
      deleteUser (
        id: String!
      ): User
    }
`;
