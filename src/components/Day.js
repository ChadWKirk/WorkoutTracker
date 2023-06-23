import {React, useState, useEffect} from 'react';
import {StyleSheet, Text, TextInput, Button, View} from 'react-native';

const Day = ({day, workout}) => {
  return (
    <View style={styles.dayContainer}>
      <Text style={styles.dayTitle}>{day}</Text>
      <TextInput style={styles.input} />
      <Button
        style={{
          color: 'white',
          fontSize: 24,
          borderWidth: 2,
          borderRadius: 4,
          borderColor: 'white',
          width: 24,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          height: 24,
        }}
        title="+"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    marginBottom: 44,
  },
  dayTitle: {
    color: 'white',
    fontSize: 48,
    marginBottom: 20,
    paddingBottom: 8,
    borderBottomWidth: 4,
    borderBottomColor: 'grey',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'grey',
  },
});

export default Day;
