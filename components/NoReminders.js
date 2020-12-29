import React from 'react';
import styled from 'styled-components';

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1 0 82%;
`;

const NoRemindersText = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.blackColor}35;
  font-weight: 500;
`;

const NoReminders = ({title}) => {
  return (
    <View>
      <NoRemindersText>No {title}</NoRemindersText>
    </View>
  );
};

export default NoReminders;
