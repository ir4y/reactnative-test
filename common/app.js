import React from 'react-native';
import {RootMixin, SchemaBranchMixin} from './mixins';
import Movies from "./movie";

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} = React;

var inc = a => a + 1;
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var App = React.createClass({
  mixins: [SchemaBranchMixin],
  schema: {
    hello: 'Hello',
    counter: 0,
    movies: [],
    page: ''
  },
  componentDidMount: function() {
    (async() => {
      let response = await fetch(REQUEST_URL);
      let data = await response.json();
      this.cursors.movies.set(data.movies);
    })();
  },
  render: function() {
    if(this.state.page == 'ML'){
      return <Movies />
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            {this.state.hello}
            Movies count: {this.state.movies.length}
          </Text>

          <TouchableOpacity onPress={() => this.cursors.page.set('ML')}>
            <Text>Open Movies list</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.cursors.counter.apply(inc)}>
            <Text>
              Counter: {this.state.counter}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
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

