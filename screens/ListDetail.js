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
import Reminder from '../components/Reminder';
import {connect} from 'react-redux';
import {KeyboardAvoidingView} from 'react-native';

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

const ListDetail = ({reminders}) => {
  const [isNewReminder, setIsNewReminder] = useState(false);

  const onNewReminder = () => {
    setIsNewReminder(!isNewReminder);
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}
        behavior="padding"
        enabled
        keyboardVerticalOffset={100}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <TouchableWithoutFeedback onPress={onNewReminder}>
            <Title>Reminders</Title>
            {reminders.reminders.length !== 0
              ? reminders.reminders.map((e, idx) => (
                  <Reminder key={idx} {...e} onNewReminder={onNewReminder} />
                ))
              : !isNewReminder && <NoReminders title={'Reminders'} />}
            {isNewReminder && <Reminder onNewReminder={onNewReminder} />}
          </TouchableWithoutFeedback>
        </ScrollView>
        {!isNewReminder && <ListBottom onNewReminder={onNewReminder} />}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {reminders: state};
};

ListDetail.propTypes = {
  list: PropTypes.array,
};

export default {
  screen: connect(mapStateToProps)(ListDetail),
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
