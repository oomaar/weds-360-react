import React from "react";
import { render } from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import store from './store/store';
import { Provider } from 'react-redux';

render(
    <Provider store={store}>
        <GlobalStyles />
        <App />
    </Provider>,
    document.getElementById("root"));