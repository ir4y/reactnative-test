import React from 'react-native';
import {RootMixin, SchemaBranchMixin} from './mixins';
import MovieList from "./movie";
import Main from  "./main";

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator,
} = React;

var App = React.createClass({
  mixins: [SchemaBranchMixin],
  schema: {
    main: {},
    catalog: {},
  },
  renderScene: function(route, nav) {
    switch(route.page){
      case "M": return <Main nav={nav} tree={this.cursors.main} />
      case "ML": return <MovieList nav={nav} tree={this.catalog} />
    }
  },
  render: function() {
    return <Navigator
      initialRoute={{page: "M" }}
      renderScene={this.renderScene}  />
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default React.createClass({
  mixins: [RootMixin],
  render: function() {
    return <App />
  }
});

