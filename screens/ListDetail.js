import React, {useState} from 'react';
import PropTypes from 'prop-types';
import theme from '../styles/theme';
import {cardStyle} from '../components/config';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import Popup from '../components/Popup';

const HeaderMore = styled(Icon)`
  margin-right: 15px;
`;

const View = styled.View``;

const Title = styled.Text`
  font-size: 32px;
  color: ${theme.blueColor};
  font-weight: 700;
`;

const list = [
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

const ListDetail = ({}) => {
  return (
    <View>
      <Title>Reminders</Title>
    </View>
  );
};

ListDetail.propTypes = {};

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
          {isPopup && <Popup onHide={() => setIsPopup(!isPopup)} list={list} />}
          <TouchableOpacity onPress={() => setIsPopup(!isPopup)}>
            <View>
              <HeaderMore
                name="ellipsis-horizontal-circle-outline"
                size={28}
                style={isPopup && {opacity: 0.15}}
                color={theme.blueColor}
              />
            </View>
          </TouchableOpacity>
        </>
      );
    },
  },
};
