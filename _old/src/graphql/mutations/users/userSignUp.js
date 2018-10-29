import { gql } from 'apollo-boost';

export default gql`
  mutation($email: String!, $password: String!) {
    userSignUp(email: $email, password: $password) {
      email
      password
      id
    }
  }
`
