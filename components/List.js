import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';
import theme from '../styles/theme';
import IconComponent from './IconComponent';

const View = styled.View`
  ${theme.boxStyle};
  display: flex;
  flex-flow: row nowrap;
  background-color: ${theme.whiteColor};
  align-items: center;
`;

const Title = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  flex: 1;
`;

const Count = styled.Text`
  font-size: 17px;
  color: ${theme.darkGreyColor};
  font-weight: 600;
  margin-right: 12px;
  opacity: 0.75;
`;

const NextIcon = styled(Icon)`
  color: ${theme.darkGreyColor};
  opacity: 0.5;
  margin-right: 8px;
`;

const List = ({title, count}) => {
  return (
    <TouchableOpacity>
      <View>
        <IconComponent
          icon={<Icon name="list-ul" size={14} color={theme.whiteColor} />}
          color={theme.blueColor}
        />
        <Title>{title}</Title>
        <Count>{count}</Count>
        <NextIcon name="angle-right" size={21} />
      </View>
    </TouchableOpacity>
  );
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default List;
