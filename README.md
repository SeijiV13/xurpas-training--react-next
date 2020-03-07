# Steps for React and Next JS Setup

## Prerequisites
1. npm install --save react react-dom next
2. npm install redux react-redux next-redux-wrapper redux-thunk --save
3. npm install axios --save
4. add scripts in package.json 
```
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
```
5. npm install react-bootstrap bootstrap for UI

## Creating the initial folder structure and base code
1. Create pages components and store folder
2. create _app.js with the following code under pages folder

```
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store/store';

const MyApp = (props) => {
    const {Component, pageProps, store } = props;
    return (
       <Provider store={store}>
         <Component {...pageProps}/>
       </Provider>
    )
}

export default withRedux(initStore)(MyApp);

```
3. Create store.js under store folder with the following code
```
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleWare from 'redux-thunk';
const bindMiddleWare = (middleware) => {
    return applyMiddleware(...middleware);
}

export const initStore = () => {
    return createStore( 
        // this is where all reducers go
        combineReducers({
        }),
        bindMiddleWare([thunkMiddleWare])
    )
}

```
4. place under _app.js import 'bootstrap/dist/css/bootstrap.min.css';
