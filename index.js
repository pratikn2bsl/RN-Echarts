/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Chart } from './src/components/Chart/Chart';

AppRegistry.registerComponent(appName, () => App);

// @ts-ignore
module.exports = {
    Chart,
};

export { default } from './src/components';
