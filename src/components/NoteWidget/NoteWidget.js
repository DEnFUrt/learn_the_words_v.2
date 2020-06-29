import React from 'react';

import s from './NoteWidget.module.scss';

const NoteWidget = ({ children }) => {
  
  return (
    <div className={s.noteWidget}>
      {children}
    </div>
  ) 
};

export default NoteWidget;
