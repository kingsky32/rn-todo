import React from 'react';
import {View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {cardStyle} from '../components/config';
import List from '../components/List';
import SearchBar from '../components/SearchBar';
import theme from '../styles/theme';

const Edit = styled.Text`
  color: ${theme.blueColor};
  font-size: 17px;
  margin-right: 15px;
  letter-spacing: -0.05px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;
  margin: 15px 0 10px 15px;
  color: ${theme.blackColor};
`;

const Home = ({reminders}) => {
  return (
    <ScrollView>
      <View>
        <SearchBar />
        <Title>My Lists</Title>
        <List title="Reminders" count={reminders.reminders.length} />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {reminders: state};
};

export default {
  screen: connect(mapStateToProps)(Home),
  navigationOptions: {
    headerStyle: {
      backgroundColor: theme.lightGreyColor,
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
    },
    cardStyle: {
      ...cardStyle,
      backgroundColor: theme.lightGreyColor,
    },
    headerTitle: '',
    headerRight: () => (
      <TouchableOpacity>
        <View>
          <Edit>Edit</Edit>
        </View>
      </TouchableOpacity>
    ),
  },
};
