import {React, useState, useEffect} from 'react';
import {StyleSheet, Text, TextInput, Button, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Day = ({day, workout}) => {
  return (
    <View style={styles.dayContainer}>
      <Text style={styles.dayTitle}>{day}</Text>
      <Icon name="threeDots" size={40} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    marginBottom: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    borderBottomWidth: 4,
    borderBottomColor: 'grey',
  },
  dayTitle: {
    color: 'white',
    fontSize: 48,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'grey',
  },
});

export default Day;
