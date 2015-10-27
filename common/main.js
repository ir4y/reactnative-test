import React from 'react-native';
import {SchemaBranchMixin} from './mixins';

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
} = React;

export default React.createClass({
  mixins: [SchemaBranchMixin],
  render: function() {
    return <View>
      <TouchableOpacity onPress={() => {this.props.nav.push({page: 'ML'}) }}>
        <Text>Movies</Text>
      </TouchableOpacity>
    </View>
  }
});

