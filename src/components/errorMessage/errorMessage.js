import React from 'react';

const ErrorMessage = ({message}) => {
  return (
    <>
      <img src={process.env.PUBLIC_URL + '/disconnect.jpg'}></img>
      <span>Ошибка загрузки: {message}</span>
    </>
  );
}

export default ErrorMessage;