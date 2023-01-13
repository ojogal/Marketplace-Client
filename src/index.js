import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/userStore';

const Context = createContext(null);

ReactDOM.render(
    <Context.Provider value={{
        user: UserStore(),
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);