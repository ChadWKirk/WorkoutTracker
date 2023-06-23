import {React, UseState, UseEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import Days from './src/components/Days';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  const heading = 'Workout Tracker';

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        <Icon name="calendar" size={40} color="white" />
        {heading}
        <Ionicons name="settings-outline" size={40} color="white" />
      </Text>

      <Days />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    minHeight: 40,
    fontSize: 16,
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    justifyContent: 'center',
    color: 'white',
    marginBottom: 52,
  },
});

export default App;
