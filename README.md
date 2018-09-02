# Suneikii Property V2

<!-- TOC -->

- [Suneikii Property V2](#suneikii-property-v2)
  - [Requirements](#requirements)
  - [Versions](#versions)
  - [Setup](#setup)
  - [How to use](#how-to-use)
  - [How to deploy](#how-to-deploy)
    - [1. Build & Export](#1-build--export)
    - [2. Move into out directory](#2-move-into-out-directory)
    - [3. Exec surge cmd to deploy](#3-exec-surge-cmd-to-deploy)
        - [3-1. Choose the directry contains static files](#3-1-choose-the-directry-contains-static-files)
        - [3-2. Choose Domain (if you dont care custom domain, press enter)](#3-2-choose-domain-if-you-dont-care-custom-domain-press-enter)
        - [3-3. Your app deployed successfully.](#3-3-your-app-deployed-successfully)
        - [3-4. Open displayed url on browser](#3-4-open-displayed-url-on-browser)

<!-- /TOC -->

## Requirements
* `NextJs` Base
* `Auth0` Account
* `GraphCMS` Account
* `React` + `Redux`
* `Apollo` Client
* Prototyping component with `StoryBook`
* Testing with `Jest` + `Enzyme`
* Typesafe coding with `Flowtype`

## Versions

```json
"dependencies": {
    "@material-ui/core": "^3.0.1",
    "apollo-boost": "^0.1.15",
    "auth0-lock": "^11.9.0",
    "babel-plugin-styled-components": "1.6.0",
    "dotenv": "^6.0.0",
    "dotenv-webpack": "^1.5.7",
    "graphql": "^14.0.0",
    "isomorphic-unfetch": "^2.1.1",
    "js-cookie": "^2.2.0",
    "jwt-decode": "2.2.0",
    "next": "6.1.1",
    "next-eslint": "0.0.4",
    "next-redux-wrapper": "^2.0.0",
    "react": "16.4.2",
    "react-apollo": "^2.1.11",
    "react-dom": "16.4.2",
    "react-redux": "^5.0.7",
    "react-transition-group": "2.4.0",
    "redux": "^4.0.0",
    "redux-act": "^1.7.4",
    "styled-components": "3.4.5",
    "uuid": "3.3.2"
  },
  "devDependencies": {
    "@babel/core": "^7.0.0",
    "@babel/preset-env": "^7.0.0",
    "@babel/preset-flow": "^7.0.0",
    "@babel/preset-react": "^7.0.0",
    "@storybook/addon-actions": "^3.4.10",
    "@storybook/addon-links": "^3.4.10",
    "@storybook/addons": "^3.4.10",
    "@storybook/react": "^3.4.10",
    "babel-core": "7.0.0-bridge.0",
    "babel-eslint": "^9.0.0",
    "babel-jest": "^23.4.2",
    "babel-plugin-transform-flow-strip-types": "^6.22.0",
    "babel-preset-next": "^2.0.0",
    "enzyme": "^3.5.0",
    "enzyme-adapter-react-16": "^1.3.1",
    "eslint": "^5.5.0",
    "eslint-config-airbnb": "^17.1.0",
    "eslint-plugin-flowtype": "^2.50.0",
    "eslint-plugin-import": "^2.14.0",
    "eslint-plugin-jsx-a11y": "^6.1.1",
    "eslint-plugin-react": "^7.11.1",
    "flow-bin": "^0.80.0",
    "flow-status-webpack-plugin": "^0.1.7",
    "jest": "^23.5.0",
    "react-addons-test-utils": "15.6.2",
    "react-test-renderer": "16.4.2",
    "standard": "^12.0.1"
  },
```

## Setup

1. Install `NPM` Packages

```bash
npm install

or if you have yarn

yarn
```

2. Setup `Auth0`

3. Setup `GraphCMS`

## How to use

1. How to use browser app
2. How to use storybook
3. How to test

## How to deploy

### 1. Build & Export

```bash
npm run build:export
```

### 2. Move into out directory

```bash
cd out
```

### 3. Exec surge cmd to deploy

```bash
surge
```

##### 3-1. Choose the directry contains static files

![](./docs/assets/README/surge-2.png =300x80)

##### 3-2. Choose Domain (if you dont care custom domain, press enter)

![](./docs/assets/README/surge-2.png =300x80)

##### 3-3. Your app deployed successfully.

![](./docs/assets/README/surge-3.png =500x120)

##### 3-4. Open displayed url on browser
※ `daffy-trees.surge.sh` in this example.

![](./docs/assets/README/surge-4.png =800x)
