import {useState} from 'react';

const useInput = (initialValue) => {
  const [value, setVaule] = useState(initialValue);
  const onChange = (text) => {
    setVaule(text);
  };

  return {value, onChange};
};

export default useInput;
