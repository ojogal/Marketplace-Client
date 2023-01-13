import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/userStore';
import { Context } from '../index.js'
import DeviceStore from './store/DeviceStore';

export const Context = createContext(null);

ReactDOM.render(
    <Context.Provider value={{
        user: UserStore(),
        device: DeviceStore()
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);