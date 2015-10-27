import React from 'react-native';
import {SchemaBranchMixin} from './mixins';

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
} = React;

var MovieList =  React.createClass({
  getInitialState: function() {
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    return {
      dataSource: ds.cloneWithRows(this.props.movies),
    };
  },

  render: function() {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}</Text>}
        />
        );
  }
});

export default React.createClass({
  mixins: [SchemaBranchMixin],
  schema: {
    page: '',
    movies: [],
  },
  render: function() {
    return <View>
      <TouchableOpacity onPress={() => this.cursors.page.set('main')}>
        <Text>Back</Text>
      </TouchableOpacity>
      <MovieList movies={this.state.movies} />
    </View>
  }
});

