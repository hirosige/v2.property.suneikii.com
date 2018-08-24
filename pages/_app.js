import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App, { Container } from "next/app";
import { ApolloClient } from "apollo-boost";
import { HttpLink } from "apollo-boost";
import { InMemoryCache } from "apollo-boost";
import fetch from "isomorphic-unfetch";
import { ApolloProvider } from "react-apollo";
import withRedux from "next-redux-wrapper";
import reducer from "../reducers"

const IS_BROWSER = !!process.browser;

if (!IS_BROWSER) {
  global.fetch = fetch;
}

const URI_ENDPOINT = "https://api.github.com/graphql";

const makeStore = (initialState, options) => {
  return createStore(reducer, initialState);
};

function createClient(initialState) {

  return new ApolloClient({
    connectToDevTools: IS_BROWSER,
    ssrMode: !IS_BROWSER, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: URI_ENDPOINT, // Server URL (must be absolute)
      headers: {
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`
      }
    }),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

const client = createClient();

class PropertySuneikii extends App {

  static async getInitialProps({Component, ctx}) {
    ctx.store.dispatch({type: 'FOO', payload: 'foo'});
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return {pageProps};
  }

  render() {
    const {Component, pageProps, store} = this.props;
    return (
      <Container>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(PropertySuneikii);
