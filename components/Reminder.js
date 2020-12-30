import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../styles/theme';
import useInput from '../hooks/useInput';
import {addToDo} from '../store';
import {connect} from 'react-redux';
import {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

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

const Reminder = ({complate = false, text, addToDo, onNewReminder}) => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef(null);
  const input = useInput('');
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
    inputRef.current.focus();
  }, []);
  return (
    <View>
      <CheckIcon
        name={complate ? 'radio-button-on-outline' : 'radio-button-off-outline'}
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
          ref={inputRef}
          value={text}
          returnKeyType="done"
          onSubmitEditing={onSubmitEditing}
          onFocus={() => setIsFocus(true)}
          onBlur={onBlur}
          autoFocus={false}
          editable={false}
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
