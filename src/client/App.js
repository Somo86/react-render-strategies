import React, {createContext} from 'react';

export const AppContext = createContext({});

const App = (props) => (
    <AppContext.Provider value={props.initialProps}>
        {props.children}
    </AppContext.Provider>
);

export default App;