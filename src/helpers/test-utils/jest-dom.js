import Adapter from '@chalbert/enzyme-adapter-react-18';
import { configure } from 'enzyme';
import jsdom from 'jsdom';

function setUpDomEnvironment() {
    const { JSDOM } = jsdom;
    const dom = new JSDOM('<!doctype html><html lang="ru"><body></body></html>', { url: 'http://localhost/' });
    const { window } = dom;

    global.window = window;
    global.document = window.document;
    global.navigator = {
        userAgent: 'node.js',
    };
    global.requestAnimationFrame = function (callback) {
        return setTimeout(callback, 0);
    };
    global.cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };
    copyProps(window, global);
}

function copyProps(window, global) {
    const props = Object.getOwnPropertyNames(window)
        .filter(prop => typeof global[prop] === 'undefined')
        .map(prop => Object.getOwnPropertyDescriptor(window, prop));
    Object.defineProperties(global, props);
}

setUpDomEnvironment();

configure({ adapter: new Adapter() });

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useLayoutEffect: jest.requireActual('react').useEffect,
}));
