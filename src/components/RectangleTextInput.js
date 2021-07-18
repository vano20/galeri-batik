import React, {useState, useEffect} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

const RectangleTextInput = ({
  answering,
  questionNumber,
  answerIndex,
  answer,
}) => {
  const [value, setValue] = useState('');
  const [debounceValue, setDebounceValue] = useState('');
  const [isRight, setIsRight] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (value) {
        setDebounceValue(value);
      }
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);
  useEffect(() => {
    setIsRight(debounceValue.toLowerCase() === answer);
  }, [debounceValue, answer]);
  const onSetValue = (text) => {
    setValue(text);
    answering({
      answer: text.toLowerCase(),
      questionNumber,
      answerIndex,
    });
  };
  const renderQuestionNumber = () => {
    let string = '';
    if (Array.isArray(answerIndex)) {
      questionNumber.forEach((item, index) => {
        if (answerIndex[index] === 0) {
          string += `${item}`;
          if (index < questionNumber.length - 1) {
            string += '/';
          }
        }
      });
      return string;
    } else if (answerIndex === 0) {
      return questionNumber;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.questionNumber}>{renderQuestionNumber()}</Text>
      <TextInput
        style={[
          styles.textInput,
          isRight && value !== '' ? styles.rightAnswer : '',
          !isRight && value !== '' ? styles.wrongAnswer : '',
        ]}
        onChangeText={(text) => onSetValue(text)}
        value={value}
        autoCorrect={false}
        maxLength={1}
        textAlign="center"
        includeFontPadding={false}
        letterSpacing={0}
        textAlignVertical="center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  rightAnswer: {
    borderColor: 'green',
    borderWidth: 2,
  },
  wrongAnswer: {
    borderColor: 'red',
    borderWidth: 2,
  },
  textInput: {
    height: 40,
    width: 32,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
  },
  questionNumber: {
    position: 'absolute',
    top: 0,
    left: 4,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
    fontSize: 12,
  },
});

export default RectangleTextInput;
