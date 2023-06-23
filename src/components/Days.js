import {React, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Day from './Day';

const Days = ({}) => {
  return (
    <View style={{width: '100%'}}>
      <Day day="Monday" />
      <Day day="Tuesday" />
      <Day day="Wednesday" />
      <Day day="Thursday" />
      <Day day="Friday" />
      <Day day="Saturday" />
      <Day day="Sunday" />
    </View>
  );
};

export default Days;
