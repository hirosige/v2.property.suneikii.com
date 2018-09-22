import React from 'react';
import Head from 'next/head';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import styled from 'styled-components';

const App = styled.div`
  height: 100vh;
  width: 100vw;
  background: #004174;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

const authLayoutHoc = Page => class AuthLayout extends React.Component {
  static getInitialProps(ctx) {
    return Page.getInitialProps && Page.getInitialProps(ctx);
  }

  render() {
    const cssFiles = [
      'https://unpkg.com/normalize.css@5.0.0/normalize.css',
    ];
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {
            /* eslint react/no-array-index-key: 0 */
            cssFiles.map((c, i) => <link key={i} href={c} rel="stylesheet" />)
          }
          <style>
            {`
            * {
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            }
            a {
              cursor: pointer;
            }
            `}
          </style>
          <title>Suneikii Property</title>
        </Head>
        <App>
          <Page />
        </App>
      </div>
    );
  }
};

export default Page => authLayoutHoc(Page);
