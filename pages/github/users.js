import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Counter from "../../components/counter"
import securePage from '../../hocs/securePage'

const GET_USER = gql`
  {
    viewer {
      login
    }
  }
`;

const Users = () => {
  return (
    <div>
      <Counter />
      <Query query={GET_USER} ssr={true}>
        {props => {
          if (props.loading) {
            return "Loading...";
          } else {
            return `Hello, ${props.data.viewer.login}`;
          }
        }}
      </Query>
    </div>
  );
};

export default securePage(Users);
