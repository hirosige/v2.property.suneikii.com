import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import securePage from '../hocs/securePage';

const Content = styled.p`
  font-size: 20px;
  font-weight: 200;
  line-height: 30px;
`;

const Secret = ({ loggedUser }) => (
  <div>
    <Content>
      Hi&nbsp;
      <strong>{loggedUser.sub.split('|')[1]}</strong>
      &nbsp;. This is a super secure page! Try loading this page again using the&nbsp;
      incognito/private mode of your browser.&nbsp;
    </Content>
  </div>
);

Secret.propTypes = {
  loggedUser: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};

export default securePage(Secret);
