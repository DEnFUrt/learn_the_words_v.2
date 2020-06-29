import React from 'react';

import s from './errorMessage.module.scss';

const ErrorMessage = ({message}) => {
  return (
    <div className={s.errorMessage}>
      <span className={s.message}>Обнаружена ошибка: {message}</span>
    </div>
  );
}

export default ErrorMessage;