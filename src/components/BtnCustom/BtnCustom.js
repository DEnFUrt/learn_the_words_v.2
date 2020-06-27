import React from 'react';

import s from './BtnCustom.module.scss';

const BtnCustom = ({ children }) => {
  return (
    <button
      className={s.button}
    >
      {children}
    </button>
  )
};

export default BtnCustom;