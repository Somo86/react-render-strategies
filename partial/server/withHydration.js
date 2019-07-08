import React from 'react';
import HydrationData from './HydrationData';

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