import {gql} from "apollo-server";

export default gql`

    type CreateAccountResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        createAccount(
            firstname: String! 
            lastname: String 
            username: String! 
            email: String! 
            password: String!
        ): User!
    }
`;