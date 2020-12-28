import React from 'react';
import styled from 'styled-components';

const View = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  ${({color}) => `background-color: ${color}`};
`;

const IconComponent = ({icon, color}) => {
  return <View color={color}>{icon}</View>;
};

export default IconComponent;
