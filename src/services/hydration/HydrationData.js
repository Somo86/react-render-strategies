import React from 'react';
import { getComponentName } from '../../utils';

class HydrationData extends React.Component {
    static currentHid = 0;
    static data = {};
  
    static storeProps(Component, props) {
      const hid = (++HydrationData.currentHid).toString();
      const name = getComponentName(Component);
      HydrationData.data[hid] = { name, props };
      return hid;
    }
  
    static flushHydrationData() {
      const data = HydrationData.data;
      const replacer = HydrationData.stringifyReplacer;
      const serializedHydrationData = JSON.stringify(data, replacer);
      HydrationData.currentHid = 0;
      HydrationData.data = {};
      return serializedHydrationData;
    }
  
    static stringifyReplacer(key, value) {
      const propsToRemove = ["__source", "__self"];
      return propsToRemove.includes(key) ? undefined : value;
    }
  
    render() {
      const type = "application/hydration-data";
      const __html = HydrationData.flushHydrationData();
      return <script type={type} dangerouslySetInnerHTML={{ __html }} />;
    }
  }

  export default HydrationData;