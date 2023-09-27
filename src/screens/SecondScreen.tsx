import React, {useEffect} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {saveWords} from '../redux/Actions';
import {getGeneratedWords} from '../redux/WordsSelector';

export function SecondScreen() {
  const dispatch = useDispatch();
  const numberWords = useSelector(getGeneratedWords) as [];

  useEffect(() => {
    const interval = setInterval(() => {
      saveValues(dispatch);
    }, 5000);
    return () => clearInterval(interval);
  });

  console.log(typeof numberWords);
  return (
    <View style={styles.container}>
      {numberWords && (
        <View>
          <Text> Palabras generadas:</Text>
          {numberWords.map(item => (
            <Text>{item}</Text>
          ))}
        </View>
      )}
    </View>
  );
}
const saveValues = (dispatch: any) => {
  const value = getRandomString();
  dispatch(saveWords(value));
  if (value.length % 5 === 0) {
    Alert.alert('Múltiplo' + value.length, '5', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
};

// generate random words
const getRandomString = () => {
  const randomLength = Math.floor(Math.random() * 15);
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charLength = chars.length;
  let result = '';
  for (let i = 0; i < randomLength; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
};

// generate ranrom letters
const generateRandomString = () => {
  const char = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';
  const random = Array.from(
    {length: Math.floor(Math.random() * 15)},
    () => char[Math.floor(Math.random() * char.length)],
  );
  return random;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default SecondScreen;
