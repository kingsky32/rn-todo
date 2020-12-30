import React, {useState} from 'react';
import PropTypes from 'prop-types';
import theme from '../styles/theme';
import {cardStyle} from '../components/config';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import Popup from '../components/Popup';
import NoReminders from '../components/NoReminders';
import ListBottom from '../components/ListBottom';
import NewReminder from '../components/NewReminder';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const ScrollView = styled.ScrollView`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 32px;
  color: ${theme.blueColor};
  font-weight: 700;
  margin-bottom: 15px;
`;

const popupList = [
  {
    text: 'Name & Appearance',
    onPress: () => null,
    icon: <Icon name="pencil-outline" size={20} />,
  },
  {
    text: 'Select Reminders...',
    onPress: () => null,
    icon: <Icon name="checkmark-circle-outline" size={20} />,
  },
  {
    text: 'Show Completed',
    onPress: () => null,
    icon: <Icon name="eye-outline" size={20} />,
  },
  {
    text: 'Delete List',
    onPress: () => null,
    icon: <Icon name="trash-outline" color={theme.redColor} size={20} />,
    delete: true,
  },
];

const ListDetail = ({list = []}) => {
  const [isNewReminder, setIsNewReminder] = useState(false);

  const onNewReminder = () => {
    setIsNewReminder(!isNewReminder);
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <TouchableWithoutFeedback
          containerStyle={{flex: 1}}
          onPress={onNewReminder}>
          <Title>Reminders</Title>
          {isNewReminder && <NewReminder />}
          {list.length !== 0
            ? null
            : !isNewReminder && <NoReminders title={'Reminders'} />}
        </TouchableWithoutFeedback>
      </ScrollView>
      {!isNewReminder && <ListBottom onNewReminder={onNewReminder} />}
    </SafeAreaView>
  );
};

ListDetail.propTypes = {
  list: PropTypes.array,
};

export default {
  screen: ListDetail,
  navigationOptions: {
    headerStyle: {
      backgroundColor: theme.whiteColor,
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
    },
    cardStyle: {
      ...cardStyle,
      backgroundColor: theme.whiteColor,
    },
    headerTitle: '',
    headerBackTitle: 'Lists',
    headerRight: () => {
      const [isPopup, setIsPopup] = useState(false);
      return (
        <>
          <Popup
            isPopup={isPopup}
            onHide={() => setIsPopup(!isPopup)}
            list={popupList}
            top={100}
            right={theme.paddingHorizontal}
          />
          <TouchableOpacity
            style={{marginRight: theme.paddingHorizontal}}
            onPress={() => setIsPopup(!isPopup)}>
            <Icon
              name="ellipsis-horizontal-circle-outline"
              size={28}
              style={isPopup && {opacity: 0.15}}
              color={theme.blueColor}
            />
          </TouchableOpacity>
        </>
      );
    },
  },
};
