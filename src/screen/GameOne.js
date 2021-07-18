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
      answer: ['s', 'u', 'r', 'a', 'd', 'a', 'n', 'b', 'a', 'y', 'a'],
      value: [],
    },
    {
      id: 2,
      answer: ['s', 'a', 'w', 'u', 'n', 'g', 'g', 'a', 'l', 'i', 'n', 'g'],
      value: [],
    },
    {
      id: 3,
      answer: ['s', 'e', 'm', 'a', 'n', 'g', 'g', 'i'],
      value: [],
    },
    {
      id: 4,
      answer: ['u', 'j', 'u', 'n', 'g', 'g', 'a', 'l', 'u', 'h'],
      value: [],
    },
    {
      id: 5,
      answer: ['y', 'i', 'n', 'd', 'a', 'n', 'y', 'a', 'n', 'g'],
      value: [],
    },
    {
      id: 6,
      answer: ['s', 'e', 'r', 'u'],
      value: [],
    },
    {
      id: 7,
      answer: ['s', 'a', 't', 'w', 'a'],
      value: [],
    },
    {
      id: 8,
      answer: ['c', 'i', 'n', 'a'],
      value: [],
    },
    {
      id: 9,
      answer: ['w', 'i', 'j', 'a', 'y', 'a'],
      value: [],
    },
    {
      id: 10,
      answer: ['r', 'e', 'b', 'u', 's'],
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
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={8}
                answerIndex={0}
                answering={setUserInput}
                answer={'c'}
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
            <View name="row2" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={8}
                answerIndex={1}
                answering={setUserInput}
                answer={'i'}
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
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={8}
                answerIndex={2}
                answering={setUserInput}
                answer={'n'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={2}
                answerIndex={0}
                answering={setUserInput}
                answer={'s'}
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
            </View>
            <View name="row4" style={styles.row}>
              <RectangleTextInput
                questionNumber={[1, 6]}
                answerIndex={[0, 0]}
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
                questionNumber={[1, 10]}
                answerIndex={[2, 0]}
                answering={setUserInput}
                answer={'r'}
              />
              <RectangleTextInput
                questionNumber={1}
                answerIndex={3}
                answering={setUserInput}
                answer={'a'}
              />
              <RectangleTextInput
                questionNumber={1}
                answerIndex={4}
                answering={setUserInput}
                answer={'d'}
              />
              <RectangleTextInput
                questionNumber={[1, 8]}
                answerIndex={[5, 3]}
                answering={setUserInput}
                answer={'a'}
              />
              <RectangleTextInput
                questionNumber={1}
                answerIndex={6}
                answering={setUserInput}
                answer={'n'}
              />
              <RectangleTextInput
                questionNumber={1}
                answerIndex={7}
                answering={setUserInput}
                answer={'b'}
              />
              <RectangleTextInput
                questionNumber={1}
                answerIndex={8}
                answering={setUserInput}
                answer={'a'}
              />
              <RectangleTextInput
                questionNumber={1}
                answerIndex={9}
                answering={setUserInput}
                answer={'y'}
              />
              <RectangleTextInput
                questionNumber={1}
                answerIndex={10}
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
            </View>
            <View name="row5" style={styles.row}>
              <RectangleTextInput
                questionNumber={6}
                answerIndex={1}
                answering={setUserInput}
                answer={'e'}
              />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={10}
                answerIndex={1}
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
              <RectangleTextInput
                questionNumber={2}
                answerIndex={2}
                answering={setUserInput}
                answer={'w'}
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
            </View>
            <View name="row6" style={styles.row}>
              <RectangleTextInput
                questionNumber={6}
                answerIndex={2}
                answering={setUserInput}
                answer={'r'}
              />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={10}
                answerIndex={2}
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
              <RectangleTextInput
                questionNumber={4}
                answerIndex={0}
                answering={setUserInput}
                answer={'u'}
              />
              <RectangleTextInput
                questionNumber={4}
                answerIndex={1}
                answering={setUserInput}
                answer={'j'}
              />
              <RectangleTextInput
                questionNumber={4}
                answerIndex={2}
                answering={setUserInput}
                answer={'u'}
              />
              <RectangleTextInput
                questionNumber={4}
                answerIndex={3}
                answering={setUserInput}
                answer={'n'}
              />
              <RectangleTextInput
                questionNumber={4}
                answerIndex={4}
                answering={setUserInput}
                answer={'g'}
              />
              <RectangleTextInput
                questionNumber={4}
                answerIndex={5}
                answering={setUserInput}
                answer={'g'}
              />
              <RectangleTextInput
                questionNumber={4}
                answerIndex={6}
                answering={setUserInput}
                answer={'a'}
              />
              <RectangleTextInput
                questionNumber={4}
                answerIndex={7}
                answering={setUserInput}
                answer={'l'}
              />
              <RectangleTextInput
                questionNumber={4}
                answerIndex={8}
                answering={setUserInput}
                answer={'u'}
              />
              <RectangleTextInput
                questionNumber={4}
                answerIndex={9}
                answering={setUserInput}
                answer={'h'}
              />
            </View>
            <View name="row7" style={styles.row}>
              <RectangleTextInput
                questionNumber={6}
                answerIndex={3}
                answering={setUserInput}
                answer={'u'}
              />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={10}
                answerIndex={3}
                answering={setUserInput}
                answer={'u'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={2}
                answerIndex={4}
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
            </View>
            <View name="row8" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={7}
                answerIndex={0}
                answering={setUserInput}
                answer={'s'}
              />
              <RectangleTextInput
                questionNumber={7}
                answerIndex={1}
                answering={setUserInput}
                answer={'a'}
              />
              <RectangleTextInput
                questionNumber={7}
                answerIndex={2}
                answering={setUserInput}
                answer={'t'}
              />
              <RectangleTextInput
                questionNumber={7}
                answerIndex={3}
                answering={setUserInput}
                answer={'w'}
              />
              <RectangleTextInput
                questionNumber={7}
                answerIndex={4}
                answering={setUserInput}
                answer={'a'}
              />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={2}
                answerIndex={5}
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
            </View>
            <View name="row9" style={styles.row}>
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
                questionNumber={2}
                answerIndex={6}
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
            </View>
            <View name="row10" style={styles.row}>
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={3}
                answerIndex={0}
                answering={setUserInput}
                answer={'s'}
              />
              <RectangleTextInput
                questionNumber={3}
                answerIndex={1}
                answering={setUserInput}
                answer={'e'}
              />
              <RectangleTextInput
                questionNumber={3}
                answerIndex={2}
                answering={setUserInput}
                answer={'m'}
              />
              <RectangleTextInput
                questionNumber={3}
                answerIndex={3}
                answering={setUserInput}
                answer={'a'}
              />
              <RectangleTextInput
                questionNumber={3}
                answerIndex={4}
                answering={setUserInput}
                answer={'n'}
              />
              <RectangleTextInput
                questionNumber={3}
                answerIndex={5}
                answering={setUserInput}
                answer={'g'}
              />
              <RectangleTextInput
                questionNumber={3}
                answerIndex={6}
                answering={setUserInput}
                answer={'g'}
              />
              <RectangleTextInput
                questionNumber={3}
                answerIndex={7}
                answering={setUserInput}
                answer={'i'}
              />
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
              <View style={styles.emptyRow} />
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={2}
                answerIndex={8}
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
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={9}
                answerIndex={0}
                answering={setUserInput}
                answer={'w'}
              />
              <RectangleTextInput
                questionNumber={[2, 9]}
                answerIndex={[9, 1]}
                answering={setUserInput}
                answer={'i'}
              />
              <RectangleTextInput
                questionNumber={9}
                answerIndex={2}
                answering={setUserInput}
                answer={'j'}
              />
              <RectangleTextInput
                questionNumber={9}
                answerIndex={3}
                answering={setUserInput}
                answer={'a'}
              />
              <RectangleTextInput
                questionNumber={9}
                answerIndex={4}
                answering={setUserInput}
                answer={'y'}
              />
              <RectangleTextInput
                questionNumber={9}
                answerIndex={5}
                answering={setUserInput}
                answer={'a'}
              />
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
                questionNumber={2}
                answerIndex={10}
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
            </View>
            <View name="row14" style={styles.row}>
              <View style={styles.emptyRow} />
              <RectangleTextInput
                questionNumber={5}
                answerIndex={0}
                answering={setUserInput}
                answer={'y'}
              />
              <RectangleTextInput
                questionNumber={5}
                answerIndex={1}
                answering={setUserInput}
                answer={'i'}
              />
              <RectangleTextInput
                questionNumber={5}
                answerIndex={2}
                answering={setUserInput}
                answer={'n'}
              />
              <RectangleTextInput
                questionNumber={5}
                answerIndex={3}
                answering={setUserInput}
                answer={'d'}
              />
              <RectangleTextInput
                questionNumber={5}
                answerIndex={4}
                answering={setUserInput}
                answer={'a'}
              />
              <RectangleTextInput
                questionNumber={5}
                answerIndex={5}
                answering={setUserInput}
                answer={'n'}
              />
              <RectangleTextInput
                questionNumber={5}
                answerIndex={6}
                answering={setUserInput}
                answer={'y'}
              />
              <RectangleTextInput
                questionNumber={5}
                answerIndex={7}
                answering={setUserInput}
                answer={'a'}
              />
              <RectangleTextInput
                questionNumber={5}
                answerIndex={8}
                answering={setUserInput}
                answer={'n'}
              />
              <RectangleTextInput
                questionNumber={[5, 2]}
                answerIndex={[9, 11]}
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
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
      <View style={styles.questionColumn}>
        <Text style={styles.questionTitle}>Mendatar:</Text>
        <Text>
          1. Motif batik yang terinspirasi dari asal usul kota surabaya{' '}
          {false && '(suradanbaya)'}
        </Text>
        <Text>
          3. Daun tumbuhan yang kerap ditemukan pada suatu daerah tepi saluran
          irigasi {false && '(semanggi)'}
        </Text>
        <Text>
          5. Persamaan gambaran pertarungan hiu dan buaya{' '}
          {false && '(yin dan yang)'}
        </Text>
        <Text>
          7. Yang terusik ketika menebang pohon bakau secara liar{' '}
          {false && '(satwa)'}
        </Text>
        <Text>9. Pendiri kerajaan majapahit {false && '(wijaya)'}</Text>
      </View>
      <View style={styles.questionColumn}>
        <Text style={styles.questionTitle}>Menurun:</Text>
        <Text>
          2. Motif ini terinspirasi dari kisah Joko Berek{' '}
          {false && '(sawunggaling)'}
        </Text>
        <Text>
          4. Motif ini terinspirasi dari kisah Raden Wijaya{' '}
          {false && '(ujunggaluh)'}
        </Text>
        <Text>6. Nama lain seni mangrove rungkut {false && '(seru)'} </Text>
        <Text>
          8. Kebudayaan yang mengalami akulturasi dengan surabaya{' '}
          {false && '(cina)'}
        </Text>
        <Text>10. Cara mengelola daun semanggi {false && '(rebus)'}</Text>
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
