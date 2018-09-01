import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Counter from '../../components/counter';
import securePage from '../../hocs/securePage';

const GET_USER = gql`
  {
    condoes {
      name
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
            let condos = props.data.condoes;

            return(
              <div>
                <ul>
                  {
                    condos.map(condo => {
                      return <li key={ condo.name }><span className="badge">{ condo.name }</span></li>
                    })
                  }
                </ul>
              </div>
            )
          }
        }}
      </Query>
    </div>
  );
};

export default securePage(Users);
