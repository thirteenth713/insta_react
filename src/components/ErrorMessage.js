import React from 'react';
import img from '../error.png';

const ErrorMessage = () => {
  return (
  //React fragment, оборачивание в невидимые блоки которые не будут отображаться
    <>
      <img src={img} alt="error"/>
    </>
  )
};

export default ErrorMessage;