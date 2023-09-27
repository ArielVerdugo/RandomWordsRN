import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getGeneratedWords} from '../redux/WordsSelector';

const FirstScreen = ({navigation}) => {
  const numberWords = useSelector(getGeneratedWords);

  return (
    <View>
      <Button
        style={styles.homeButtonSection}
        title="Go to Second Screen"
        onPress={() => navigation.navigate('SecondScreen')}
      />
      <Text>{numberWords.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeButtonSection: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FirstScreen;
