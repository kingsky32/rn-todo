import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import theme from '../styles/theme';
import constants from '../constants';
import {Modal} from 'react-native';

const ModalContainer = styled.View`
  position: absolute;
  background-color: ${theme.whiteColor};
  width: 235px;
  border-radius: ${theme.borderRadius}px;
  box-shadow: 0 0 200px #00000095;
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

const Popup = ({isPopup, list, onHide, top, right}) => {
  return (
    <Modal
      visible={isPopup}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      transparent>
      <TouchableWithoutFeedback
        style={{
          width: constants.width,
          height: constants.height,
        }}
        onPress={onHide}>
        <ModalContainer style={{top, right}}>
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
        </ModalContainer>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

Popup.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Popup;
