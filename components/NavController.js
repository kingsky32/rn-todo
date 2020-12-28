import React from 'react';
import styled from 'styled-components';
import MainNavigation from '../navigation/MainNavigation';

const View = styled.View`
  flex: 1;
`;

const NavController = () => {
  return (
    <View>
      <MainNavigation />
    </View>
  );
};

export default NavController;
