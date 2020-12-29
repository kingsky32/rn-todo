import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import theme from '../styles/theme';

const View = styled.View`
  position: absolute;
  background-color: ${theme.whiteColor};
  top: 45px;
  width: 235px;
  left: -210px;
  border-radius: ${theme.borderRadius}px;
  box-shadow: 0 0 250px #00000095;
`;

const List = styled.View`
  width: 100%;
  height: 43px;
  padding: 0 ${theme.paddingHorizontal}px;
  border-bottom-color: ${theme.darkGreyColor}75;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const ListText = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;

const Popup = ({list}) => {
  return (
    <View>
      {list &&
        list.map((e, idx) => (
          <TouchableOpacity key={idx} onPress={e.onPress}>
            <List style={idx !== list.length - 1 && {borderBottomWidth: 1}}>
              <ListText style={e.delete && {color: theme.redColor}}>
                {e.text}
              </ListText>
              {e.icon}
            </List>
          </TouchableOpacity>
        ))}
    </View>
  );
};

Popup.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Popup;
