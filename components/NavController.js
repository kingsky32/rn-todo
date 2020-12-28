import React from 'react';
import styled from 'styled-components';
import MainNavigation from './MainNavigation';

const View = styled.SafeAreaView`
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
