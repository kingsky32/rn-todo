import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../styles/theme';

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
  border-bottom-width: 1px;
  height: 42px;
  border-bottom-color: ${theme.blackColor}25;
  font-size: 18px;
`;

const TouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  right: 0;
`;

const InfoIcon = styled(Icon)``;

const NewReminder = ({complate = false}) => {
  const inputRef = useRef(null);
  const onSubmitEditing = () => {
    // TODO: Add, Edit List
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
      <Input ref={inputRef} onSubmitEditing={onSubmitEditing} />
      <TouchableOpacity>
        <InfoIcon
          name="information-circle-outline"
          size={26}
          color={theme.blueColor}
        />
      </TouchableOpacity>
    </View>
  );
};

NewReminder.propTypes = {};

export default NewReminder;
