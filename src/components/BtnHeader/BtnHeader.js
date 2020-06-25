import React from 'react';

import s from './BtnHeader.module.scss';

const BtnHeader = ({ children }) => {
  return <button
      className={s.button}
    >
      {children}
    </button>;
};

export default BtnHeader;