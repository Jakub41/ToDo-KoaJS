export const NewUserPatch = `
    input NewUserPatch {
        # Email required
        # Password Required
        name        : String
        last_name   : String
        email       : String!
        password    : String!
    }
`;
