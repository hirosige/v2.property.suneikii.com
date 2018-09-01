import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Counter from '../../components/counter';
import securePage from '../../hocs/securePage';

const GET_USER = gql`
  {
    condoes {
      name
    }
  }
`;

const Condos = () => {
  return (
    <div>
      <Counter />
      <Query query={GET_USER} ssr>
        {(props) => {
          if (props.loading) {
            return 'Loading...';
          } else {
            const condos = props.data.condoes;

            return (
              <div>
                <ul>
                  {
                    condos.map((condo) => {
                      return (
                        <li key={condo.name}>
                          <span className="badge">{ condo.name }</span>
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
            );
          }
        }}
      </Query>
    </div>
  );
};

Condos.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.shape({
    condoes: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

Condos.defaultProps = {
  loading: false,
  data: {},
};

export default securePage(Condos);
