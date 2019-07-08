import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import HomeNoHydrate from './HomeNoHydrate';
import App from '../App';

const InitialPropsRoutes = ({ component: Component, ...rest }) => (
    <Route {...rest} render={hydrateWithInitialProps(Component)} />
);

const AppRouter = () => {
    return (
        <Router>
            <InitialPropsRoutes path="/" exact component={Home} />
            <InitialPropsRoutes path="/withoutHydration" exact component={HomeNoHydrate} />
        </Router>
    );
}

/* ******************************************************************* */

function hydrateWithInitialProps(Component) {
    
    return (routeProps) => {
        let getInitialProps;

        if(window.__INITIAL__DATA__) {
            // Hydrate with data from server
            // generate mock getInital props to return __INITIAL__DATA__
            const initialPropsFn = {then: (fn) => {
                fn(window.__INITIAL__DATA__);
                delete window.__INITIAL__DATA__;
            }
            };
            getInitialProps = initialPropsFn;
            ;
        } else {
            // Hydrate runing getInitialProps on client
            getInitialProps = buildInitialProps(Component.getInitialProps);
        }
        
        return (
            <Hydrate routeProps={routeProps} getInitialProps={getInitialProps}>
                <Component />
            </Hydrate>
        );
    };
}

/**
 * Run getinitialProps and passes data to Component
 */
function Hydrate({children, routeProps, getInitialProps}) {

    const [initialProps, setInitialProps] = useState({});
    useEffect(() => {
        getInitialProps.then( (response = {}) => {
            setInitialProps(response)      
        });
    }, [getInitialProps]);

    return (
        <App initialProps={initialProps}>
            { React.cloneElement(children, [routeProps]) }
        </App>
    );
}

/**
 * Generate fake getInitialProps in case it doesn't exist on Coomponent
 * Add 'then' method in case it doesn't exist
 */

function buildInitialProps(initialPropsFn) {

    if(!initialPropsFn) {
        return {};
    }

    let pendingInitialProps = initialPropsFn();
    if(!pendingInitialProps.then){ pendingInitialProps = {then: pendingInitialProps}  }
    return pendingInitialProps;
}

export default AppRouter;