import React from 'react';
import { Query } from 'react-apollo';

/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import gql from 'graphql-tag';

import Counter from '../../components/counter';
import securePage from '../../hocs/securePage';

const GET_USER = gql`
  {
    viewer {
      login
    }
  }
`;

const Users = () => (
  <div>
    <Counter />
    <Query query={GET_USER} ssr>
      {(props) => {
        if (props.loading) {
          return 'Loading...';
        }

        return `Hello, ${props.data.viewer.login}`;
      }}
    </Query>
  </div>
);

Users.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.shape({
    viewer: PropTypes.shape({
      login: PropTypes.string,
    }),
  }),
};

Users.defaultProps = {
  loading: false,
  data: {},
};

export default securePage(Users);
