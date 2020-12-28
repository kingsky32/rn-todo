import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

const View = styled.View`
  width: 100%;
  height: 35px;
  border-radius: ${({theme}) => theme.borderRadius}px;
  padding: 7px;
  background-color: #e3e3e8;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const SearchIcon = styled(Icon)`
  opacity: 0.25;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 15px;
  margin-left: 5px;
  font-weight: 600;
  letter-spacing: -0.05px;
`;

const SearchBar = () => {
  return (
    <View>
      <SearchIcon name="search" size={18} />
      <Input placeholder="Search" />
    </View>
  );
};

export default SearchBar;
