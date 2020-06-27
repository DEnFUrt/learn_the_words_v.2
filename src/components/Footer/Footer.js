import React from 'react';
import Paragraph from '../Paragraph';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div 
      className={s.footer}
    >
      <Paragraph
        prgClass={{ prgFooter: true }}
      >
        Уже всё выучили?
      </Paragraph>
      <Paragraph
        prgClass={{ prgFooter: true }}
      >
        Добавляйте карточки и продолжайте совершенствоваться!
      </Paragraph>
    </div> 
  );
}

export default Footer;