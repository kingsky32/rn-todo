import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';
import theme from '../styles/theme';
import IconComponent from './IconComponent';

const View = styled.View`
  ${theme.boxStyle};
  display: flex;
  flex-flow: row nowrap;
  background-color: ${theme.whiteColor};
  align-items: center;
`;

const Title = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  flex: 1;
`;

const List = () => {
  return (
    <View>
      <IconComponent
        icon={<Icon name="list-ul" size={14} color={theme.whiteColor} />}
        color={theme.blueColor}
      />
      <Title>Reminders</Title>
    </View>
  );
};

export default List;
