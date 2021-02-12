import React from 'react';
import {Text} from 'react-native';

const CapitalizedText = (props) => {
  const word = (string) =>
    string.slice(0, 1).toUpperCase() +
    string.slice(1, string.length).toLowerCase();
  const eachWord = props.children
    .split(' ')
    .map((item) => word(item))
    .join(' ');
  return (
    <Text
      style={{
        fontWeight: props.bold ? 'bold' : '100',
        fontSize: props.title
          ? typeof props.title === 'number'
            ? props.title
            : 20
          : 14,
      }}>
      {eachWord}
    </Text>
  );
};

export default CapitalizedText;
