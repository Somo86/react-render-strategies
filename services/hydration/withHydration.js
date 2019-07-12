import React from 'react';
import HydrationData from './HydrationData';

/**
 * Decorator. Take the component and return it
 * with script marked by id related to HydrationData
 * @param {*} Component 
 */
const withHydration = (Component) => (props) => {
    const hid = HydrationData.storeProps(Component, props);
    return (
      <span>
        <script type="application/hydration-marker" data-hid={hid} />
        <Component {...props} />
      </span>
    );
}

export default withHydration;