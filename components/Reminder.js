import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../styles/theme';
import useInput from '../hooks/useInput';
import {addToDo} from '../store';
import {connect} from 'react-redux';
import {useState} from 'react';
import {RectButton, Swipeable} from 'react-native-gesture-handler';

const View = styled.View`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  align-items: center;
`;

const CheckIcon = styled(Icon)``;

const Input = styled.TextInput`
  flex: 1;
  padding: 0 35px 0 5px;
  height: 42px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.blackColor}25;
  font-size: 16px;
`;

const TouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  right: 0;
`;

const InfoIcon = styled(Icon)``;

const ActionText = styled.Text`
  color: ${theme.whiteColor};
  font-size: 15px;
  font-weight: 500;
`;

const Reminder = ({complate = false, text, addToDo, onNewReminder}) => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef(null);
  const swipeableRef = useRef(null);
  const input = useInput('');
  const close = () => {
    swipeableRef.current.close();
  };
  const renderRightActions = (progress) => {
    const onDelete = () => {
      close();
    };
    const onDetail = () => {
      close();
    };
    return (
      <>
        <RectButton
          onPress={onDelete}
          style={{
            backgroundColor: `${theme.redColor}98`,
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
          }}>
          <ActionText>Delete</ActionText>
        </RectButton>
        <RectButton
          onPress={onDetail}
          style={{
            backgroundColor: `${theme.darkGreyColor}70`,
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
          }}>
          <ActionText>Details</ActionText>
        </RectButton>
      </>
    );
  };
  const onSubmitEditing = () => {
    if (input.value.length > 0) {
      addToDo(input.value);
      input.value = '';
    }
    onNewReminder();
  };
  const onPressDetail = () => {
    // TODO: Add Detail card
  };

  const onBlur = () => {
    setIsFocus(false);
    onNewReminder();
  };
  useEffect(() => {
    inputRef.current && inputRef.current.focus();
    return () => {
      inputRef.current && inputRef.current.blur();
    };
  }, []);
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      friction={2}
      rightThreshold={30}
      overshootRight={false}
      ref={swipeableRef}>
      <View>
        <CheckIcon
          name={
            complate ? 'radio-button-on-outline' : 'radio-button-off-outline'
          }
          size={32}
          color={`${theme.blackColor}25`}
        />
        {!text ? (
          <Input
            ref={inputRef}
            value={input.value}
            onChangeText={input.onChange}
            onFocus={() => setIsFocus(true)}
            onBlur={onBlur}
            returnKeyType="done"
            onSubmitEditing={onSubmitEditing}
          />
        ) : (
          <Input
            value={text}
            returnKeyType="done"
            onSubmitEditing={onSubmitEditing}
            onFocus={() => setIsFocus(true)}
            onBlur={onBlur}
            autoFocus={false}
          />
        )}
        {isFocus && (
          <TouchableOpacity onPress={onPressDetail}>
            <InfoIcon
              name="information-circle-outline"
              size={26}
              color={theme.blueColor}
            />
          </TouchableOpacity>
        )}
      </View>
    </Swipeable>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(addToDo(text)),
  };
};

Reminder.propTypes = {
  complate: PropTypes.bool,
};

export default connect(null, mapDispatchToProps)(Reminder);
