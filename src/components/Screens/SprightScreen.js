import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';

import BreakTimer from '../BreakTimer/BreakTimer';

const SprightsScreen = (props) => (
  <View style={styles.container}>
    <BreakTimer/>
    <ScrollView style={styles.scrollView}>
      <Text>{props.selectedClass}</Text>
      <Text>{props.queue}</Text>
      {/* TODO: Adjust Scrollview Height */}
      <Button title="Skip Break"/>
    </ScrollView>
  </View>
);

const mapStateToProps = state => ({
  selectedClass: state.stretches.selectedClass.exercise,
  queue: state.stretches.selectedClass.queue
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'flex-start',
  },
});


export default connect(mapStateToProps)(SprightsScreen);