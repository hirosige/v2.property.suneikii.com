import React from 'react';
import AuthLayout from '../../hocs/authLayout';
import { show } from '../../utils/lock';

const CONTAINER_ID = 'put-lock-here';

class SignIn extends React.Component {
  componentDidMount() {
    show(CONTAINER_ID);
  }

  render() {
    return (
      <div className="login-body">
        <div id={CONTAINER_ID} />

        <style jsx>
          {`
            .login-body {
              background: #004174;
            }
          `}
        </style>
      </div>
    );
  }
}

export default AuthLayout(SignIn);
