import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import theme from '../styles/theme';

const Wrapper = styled.View`
  justify-content: center;
`;

const View = styled.View`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 16px;
  color: ${theme.blueColor};
  margin-left: 7px;
  font-weight: 700;
`;

const TouchableOpacity = styled.TouchableOpacity``;

const ListBottom = ({onNewReminder}) => {
  return (
    <Wrapper>
      <TouchableOpacity onPress={onNewReminder}>
        <View>
          <Icon name="add-circle-outline" size={32} color={theme.blueColor} />
          <Text>New Reminder</Text>
        </View>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default ListBottom;
