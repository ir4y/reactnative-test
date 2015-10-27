import React from 'react-native';
import {SchemaBranchMixin} from './mixins';

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
} = React;

var MovieList = React.createClass({
  mixins: [SchemaBranchMixin],
  schema:{
    total: 0,
    movies: []
  },
  render: function() {
    return <View>
      <Text>{this.state.total}</Text>
  </View>
  }
});

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default React.createClass({
  mixins: [SchemaBranchMixin],
  schema: {
    moviesData: {movies:[]}
  },
  componentDidMount: function() {
      (async() => {
        let response = await fetch(REQUEST_URL);
        let data = await response.json();
        this.cursors.moviesData.set(data);
      })();
  },
  render: function() {
    return <View>
      <TouchableOpacity onPress={() => this.props.nav.push({page: 'M'})}>
        <Text>Back</Text>
      </TouchableOpacity>
      <MovieList tree={this.cursors.moviesData} />
    </View>
  }
});
