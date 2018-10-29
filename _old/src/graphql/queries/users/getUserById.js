import { gql } from 'apollo-boost';

export default gql`
  {
    user(id: "5bd09ae58ac6750cbed4460d") {
      email
      password
      id
    }
  }
`
