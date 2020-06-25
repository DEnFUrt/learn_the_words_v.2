import React from 'react';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div 
      className={s.footer}
    >
      <p>Еще один текстовой блок</p>
      <p>Скоро во фсех твитерах и фейсбуках!</p>
    </div> 
  );
}

export default Footer;

