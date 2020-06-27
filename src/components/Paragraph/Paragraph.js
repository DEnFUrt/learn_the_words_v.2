import React from 'react';
import cl from 'classnames';

import s from './Paragraph.module.scss';

const Paragraph = ({prgClass, children }) => {
  const prgClassName = cl(
    {
      [s.paragraphHeader]: prgClass.prgHeader,
      [s.paragraphFooter]: prgClass.prgFooter,
      [s.paragraphBtnFooter]: prgClass.prgBtnFooter,
    }
  );

  return (
    <p className={prgClassName}> 
      {children}
    </p>
  ) 
};

export default Paragraph;