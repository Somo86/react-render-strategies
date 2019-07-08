export const MARKER_SELECTOR = 'script[type="application/hydration-marker"]';
export const DATA_SELECTOR = 'script[type="application/hydration-data"]';

export const getMarkers = () => 
    document.querySelectorAll(MARKER_SELECTOR);

export const getData = (dataScript) => {
    return dataScript 
        ? JSON.parse(dataScript.innerHTML)
        : {};
};

export const getComponentName = (component) => {
    const compName = component.displayName || component.name;
    return compName;
};

/**
 * 
 * @param {*} components 
 * @return {[component name]: Component}
 */
export const getComponentMap = components => {
    return components.reduce((acc, component) => {
        return {...acc, [getComponentName(component)]: component}
    }, {});
}

export const getComponent = (componentMap, data, id) => componentMap[data[id].name];

export const getProps = (data, id) => data[id] ? data[id].props : {};

export const readMarker = marker => {
    const id = marker.getAttribute('data-hid');
    const el = marker.nextElementSibling;
    const parent = el.parentElement;

    return { id, el, parent };
}