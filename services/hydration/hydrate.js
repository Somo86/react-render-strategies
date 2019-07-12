import React from 'react';
import ReactDOM from 'react-dom';
import {
  getMarkers, 
  getData, 
  getComponentMap,
  readMarker,
  getComponent,
  getProps,
  DATA_SELECTOR
} from '../../utils';


/**
 * 
 * @param {*} components -> All components to hydrate in a single array
 * @param {*} container -> Container where to find all markups
 * "application/hydration-marker" markup contain all components id that need to be hydrate
 * "application/hydration-data" markup contain all components data saved as {[component id]: {[name][props]}}
 * foreach marker get markup id and parent (wrapper container)
 * find each id related to each component
 */
function hydrate(components = [], container = document) {
  const markers = getMarkers(container); // ids to hydrate
  const dataScript = container.querySelector(DATA_SELECTOR); //component name - id - props to hydrate
  const data = getData(dataScript); //parsed to JSON
  const componentMap = getComponentMap(components); //componentName: Component

  // TODO import and run this in DEV env only
  //showHydrationWarnings(dataScript, data, components, markers);

  for (const marker of markers) {
    const { id, parent } = readMarker(marker); // marker id and container
    const Component = getComponent(componentMap, data, id); //component name related to id
    const props = getProps(data, id); // props related to id
    if (Component) ReactDOM.render(<Component {...props} />, parent); // render component rehydrated to container
  }
}

export default hydrate;