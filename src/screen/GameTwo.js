import React, {useState, useLayoutEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import RectangleTextInput from '../components/RectangleTextInput';

const Detail = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRightStyle}>
          <Text style={styles.marksStyle}>{marks || ''}</Text>
        </View>
      ),
    });
  });
  const [value, setValue] = useState([
    {
      id: 1,
      answer: ['s', 'u', 'r', 'a', 'b', 'a', 'y', 'a'],
      value: [],
    },
    {
      id: 3,
      answer: ['t', 'a', 'r', 't', 'a', 'r'],
      value: [],
    },
    {
      id: 5,
      answer: ['s', 'e', 'm', 'a', 'n', 'g', 'g', 'i'],
      value: [],
    },
    {
      id: 7,
      answer: ['j', 'o', 'k', 'o', 'b', 'e', 'r', 'e', 'k'],
      value: [],
    },
    {
      id: 9,
      answer: [
        'w',
        'i',
        's',
        'm',
        'a',
        'k',
        'e',
        'd',
        'u',
        'n',
        'g',
        'a',
        's',
        'e',
        'm',
      ],
      value: [],
    },
    {
      id: 2,
      answer: ['a', 'y', 'a', 'm', 'j', 'a', 'g', 'o'],
      value: [],
    },
    {
      id: 4,
      answer: ['k', 'a', 'l', 'i', 'm', 'a', 's'],
      value: [],
    },
    {
      id: 6,
      answer: ['m', 'a', 'n', 'g', 'r', 'o', 'v', 'e'],
      value: [],
    },
    {
      id: 8,
      answer: ['b', 'a', 't', 'i', 'k'],
      value: [],
    },
    {
      id: 10,
      answer: ['h', 'i', 'u', 's', 'u', 'r', 'a'],
      value: [],
    },
  ]);
  const [marks, setMarks] = useState(0);

  const checkAnswer = (input, answer) => {
    if (!input.length || !answer.length) {
      return false;
    }
    if (input.length !== answer.length) {
      return false;
    }
    const filtered = answer.filter((item, index) => item === input[index]);
    return filtered.length === answer.length;
  };

  const setUserInput = ({answer, questionNumber, answerIndex}) => {
    const clonedValue = [...value];
    const arrayQuestion = Array.isArray(questionNumber)
      ? questionNumber
      : [questionNumber];
    const arrayIndex = Array.isArray(answerIndex) ? answerIndex : [answerIndex];
    arrayQuestion.forEach((item, qIndex) => {
      const index = clonedValue.findIndex((find) => find.id === item);
      if (index > -1) {
        clonedValue[index].value[arrayIndex[qIndex]] = answer;
      }
    });

    setValue(clonedValue);
    setMarks(
      clonedValue.reduce((acc, item) => {
        if (checkAnswer(item.value, item.answer)) {
          return (acc += 10);
        }
        return acc;
      }, 0),
    );
  };
  return (
    <ScrollView style={styles.container}>
      {/* <Text
        style={{
          color: '#fff',
        }}>{`${current.col}, ${current.row} = ${current.debounceValue}`}</Text> */}
      <ScrollView style={styles.container} horizontal={true}>
        <ImageBackground source={require('./img/map.jpg')} style={styles.image}>
          <View style={styles.column}>
            <View name="row1" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={8}
                answerIndex={0}
                answering={setUserInput}
                answer={'b'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
            </View>
            <View name="row2" style={styles.row}>
              <RectangleTextInput
                questionNumber={1}
                answerIndex={0}
                answering={setUserInput}
                answer={'s'}
              />
              <RectangleTextInput
                questionNumber={1}
                answerIndex={1}
                answering={setUserInput}
                answer={'u'}
              />
              <RectangleTextInput
                questionNumber={1}
                answerIndex={2}
                answering={setUserInput}
                answer={'r'}
              />
              <RectangleTextInput
                questionNumber={[1, 8]}
                answerIndex={[3, 1]}
                answering={setUserInput}
                answer={'a'}
              />
              <RectangleTextInput
                questionNumber={1}
                answerIndex={4}
                answering={setUserInput}
                answer={'b'}
              />
              <RectangleTextInput
                questionNumber={[1, 2]}
                answerIndex={[5, 0]}
                answering={setUserInput}
                answer={'a'}
              />
              <RectangleTextInput
                questionNumber={1}
                answerIndex={6}
                answering={setUserInput}
                answer={'y'}
              />
              <RectangleTextInput
                questionNumber={1}
                answerIndex={7}
                answering={setUserInput}
                answer={'a'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
            </View>
            <View name="row3" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={8}
                answerIndex={2}
                answering={setUserInput}
                answer={'t'}
              />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={2}
                answerIndex={1}
                answering={setUserInput}
                answer={'y'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={10}
                answerIndex={0}
                answering={setUserInput}
                answer={'h'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
            </View>
            <View name="row4" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={8}
                answerIndex={3}
                answering={setUserInput}
                answer={'i'}
              />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={2}
                answerIndex={2}
                answering={setUserInput}
                answer={'a'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={10}
                answerIndex={1}
                answering={setUserInput}
                answer={'i'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
            </View>
            <View name="row5" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={8}
                answerIndex={4}
                answering={setUserInput}
                answer={'k'}
              />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={2}
                answerIndex={3}
                answering={setUserInput}
                answer={'m'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={10}
                answerIndex={2}
                answering={setUserInput}
                answer={'u'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
            </View>
            <View name="row6" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={2}
                answerIndex={4}
                answering={setUserInput}
                answer={'j'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={4}
                answerIndex={0}
                answering={setUserInput}
                answer={'k'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={10}
                answerIndex={3}
                answering={setUserInput}
                answer={'s'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
            </View>
            <View name="row7" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={3}
                answerIndex={0}
                answering={setUserInput}
                answer={'t'}
              />
              <RectangleTextInput
                questionNumber={[3, 2]}
                answerIndex={[1, 5]}
                answering={setUserInput}
                answer={'a'}
              />
              <RectangleTextInput
                questionNumber={3}
                answerIndex={2}
                answering={setUserInput}
                answer={'r'}
              />
              <RectangleTextInput
                questionNumber={3}
                answerIndex={3}
                answering={setUserInput}
                answer={'t'}
              />
              <RectangleTextInput
                questionNumber={[3, 4]}
                answerIndex={[4, 1]}
                answering={setUserInput}
                answer={'a'}
              />
              <RectangleTextInput
                questionNumber={3}
                answerIndex={5}
                answering={setUserInput}
                answer={'r'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={10}
                answerIndex={4}
                answering={setUserInput}
                answer={'u'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
            </View>
            <View name="row8" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={2}
                answerIndex={6}
                answering={setUserInput}
                answer={'g'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={4}
                answerIndex={2}
                answering={setUserInput}
                answer={'l'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={10}
                answerIndex={5}
                answering={setUserInput}
                answer={'r'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
            </View>
            <View name="row9" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={2}
                answerIndex={7}
                answering={setUserInput}
                answer={'o'}
              />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={9}
                answerIndex={0}
                answering={setUserInput}
                answer={'w'}
              />
              <RectangleTextInput
                questionNumber={[9, 4]}
                answerIndex={[1, 3]}
                answering={setUserInput}
                answer={'i'}
              />
              <RectangleTextInput
                questionNumber={9}
                answerIndex={2}
                answering={setUserInput}
                answer={'s'}
              />
              <RectangleTextInput
                questionNumber={9}
                answerIndex={3}
                answering={setUserInput}
                answer={'m'}
              />
              <RectangleTextInput
                questionNumber={9}
                answerIndex={4}
                answering={setUserInput}
                answer={'a'}
              />
              <RectangleTextInput
                questionNumber={9}
                answerIndex={5}
                answering={setUserInput}
                answer={'k'}
              />
              <RectangleTextInput
                questionNumber={9}
                answerIndex={6}
                answering={setUserInput}
                answer={'e'}
              />
              <RectangleTextInput
                questionNumber={9}
                answerIndex={7}
                answering={setUserInput}
                answer={'d'}
              />
              <RectangleTextInput
                questionNumber={9}
                answerIndex={8}
                answering={setUserInput}
                answer={'u'}
              />
              <RectangleTextInput
                questionNumber={9}
                answerIndex={9}
                answering={setUserInput}
                answer={'n'}
              />
              <RectangleTextInput
                questionNumber={9}
                answerIndex={10}
                answering={setUserInput}
                answer={'g'}
              />
              <RectangleTextInput
                questionNumber={[9, 10]}
                answerIndex={[11, 6]}
                answering={setUserInput}
                answer={'a'}
              />
              <RectangleTextInput
                questionNumber={9}
                answerIndex={12}
                answering={setUserInput}
                answer={'s'}
              />
              <RectangleTextInput
                questionNumber={9}
                answerIndex={13}
                answering={setUserInput}
                answer={'e'}
              />
              <RectangleTextInput
                questionNumber={9}
                answerIndex={14}
                answering={setUserInput}
                answer={'m'}
              />
            </View>
            <View name="row10" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={4}
                answerIndex={4}
                answering={setUserInput}
                answer={'m'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
            </View>
            <View name="row11" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={4}
                answerIndex={5}
                answering={setUserInput}
                answer={'a'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
            </View>
            <View name="row12" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={[4, 5]}
                answerIndex={[6, 0]}
                answering={setUserInput}
                answer={'s'}
              />
              <RectangleTextInput
                questionNumber={5}
                answerIndex={1}
                answering={setUserInput}
                answer={'e'}
              />
              <RectangleTextInput
                questionNumber={[5, 6]}
                answerIndex={[2, 0]}
                isInitial={true}
                answering={setUserInput}
                answer={'m'}
              />
              <RectangleTextInput
                questionNumber={5}
                answerIndex={3}
                answering={setUserInput}
                answer={'a'}
              />
              <RectangleTextInput
                questionNumber={5}
                answerIndex={4}
                answering={setUserInput}
                answer={'n'}
              />
              <RectangleTextInput
                questionNumber={5}
                answerIndex={5}
                answering={setUserInput}
                answer={'g'}
              />
              <RectangleTextInput
                questionNumber={5}
                answerIndex={6}
                answering={setUserInput}
                answer={'g'}
              />
              <RectangleTextInput
                questionNumber={5}
                answerIndex={7}
                answering={setUserInput}
                answer={'i'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
            </View>
            <View name="row13" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={6}
                answerIndex={1}
                answering={setUserInput}
                answer={'a'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
            </View>
            <View name="row14" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={6}
                answerIndex={2}
                answering={setUserInput}
                answer={'n'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
            </View>
            <View name="row15" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={6}
                answerIndex={3}
                answering={setUserInput}
                answer={'g'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
            </View>
            <View name="row16" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={6}
                answerIndex={4}
                answering={setUserInput}
                answer={'r'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
            </View>
            <View name="row17" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={7}
                answerIndex={0}
                answering={setUserInput}
                answer={'j'}
              />
              <RectangleTextInput
                questionNumber={[6, 7]}
                answerIndex={[5, 1]}
                answering={setUserInput}
                answer={'o'}
              />
              <RectangleTextInput
                questionNumber={7}
                answerIndex={2}
                answering={setUserInput}
                answer={'k'}
              />
              <RectangleTextInput
                questionNumber={7}
                answerIndex={3}
                answering={setUserInput}
                answer={'o'}
              />
              <RectangleTextInput
                questionNumber={7}
                answerIndex={4}
                answering={setUserInput}
                answer={'b'}
              />
              <RectangleTextInput
                questionNumber={7}
                answerIndex={5}
                answering={setUserInput}
                answer={'e'}
              />
              <RectangleTextInput
                questionNumber={7}
                answerIndex={6}
                answering={setUserInput}
                answer={'r'}
              />
              <RectangleTextInput
                questionNumber={7}
                answerIndex={7}
                answering={setUserInput}
                answer={'e'}
              />
              <RectangleTextInput
                questionNumber={7}
                answerIndex={8}
                answering={setUserInput}
                answer={'k'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
            </View>
            <View name="row18" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={6}
                answerIndex={6}
                answering={setUserInput}
                answer={'v'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
            </View>
            <View name="row19" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={6}
                answerIndex={7}
                answering={setUserInput}
                answer={'e'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
      <View style={styles.questionColumn}>
        <Text style={styles.questionTitle}>Mendatar:</Text>
        <Text>
          1. Kata yang menjadi inspirasi motif batik sura dan baya{' '}
          {false && '(surabaya)'}
        </Text>
        <Text>
          3. Pasukan yang bertempur dengan raden wijaya {false && '(tartar)'}
        </Text>
        <Text>
          5. Motif batik yang menggambarkan helai - helai daun{' '}
          {false && '(semanggi)'}
        </Text>
        <Text>7. Nama lain Sawunggaling {false && '(jokoberek)'}</Text>
        <Text>
          9. Masyarakat yang prihatin dengan rusaknya lingkungan pantai karena
          ada orang yang menebang pohon bakau secara liar{' '}
          {false && '(wismakedungasem)'}
        </Text>
      </View>
      <View style={styles.questionColumn}>
        <Text style={styles.questionTitle}>Menurun:</Text>
        <Text>
          2. Hewan yang menjadi hobi joko berek {false && '(ayamjago)'}
        </Text>
        <Text>
          4. Tempat pertempuran raden wijaya dengan pasukan tartar{' '}
          {false && '(kalimas)'}
        </Text>
        <Text>6. Nama lain pohon bakau {false && '(mangrove)'}</Text>
        <Text>
          8. Gaya yang menggambarkan ayam jago pada sawunggaling{' '}
          {false && '(batik)'}
        </Text>
        <Text>
          10. Binatang yang bertarung dengan buaya baya {false && '(hiusura)'}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerRightStyle: {
    padding: 10,
  },
  marksStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  column: {
    flexDirection: 'column',
    // backgroundColor: '#000',
    paddingVertical: 10,
  },
  questionColumn: {
    flexDirection: 'column',
    backgroundColor: 'rgba(255,255,255, 1)',
    borderRadius: 10,
    padding: 5,
  },
  emptyRow: {
    height: 40,
    width: 32,
  },
  row: {
    flexDirection: 'row',
  },
  questionTitle: {
    fontWeight: 'bold',
  },
});

export default Detail;
