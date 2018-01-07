import React from 'react';
import store from '../store';
import TicTacToe from "../components/TicTacToe";
import { Provider } from "react-redux";

export default () => <div>
    <Provider store={store}>
        <TicTacToe/>
    </Provider>
</div>
