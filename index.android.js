/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import tree from './common/tree.js';
import App from './common/app.js';

var AwesomeProject = React.createClass({
  render: function(){
    return <App tree={tree} />
  }
});

React.AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
