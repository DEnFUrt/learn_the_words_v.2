import React from 'react';
import Header from '../Header';
import BtnCustom from '../BtnCustom';
import Paragraph from '../Paragraph';
import {Link} from 'react-router-dom';

import s from './HeaderBlock.module.scss';

const HeaderBlock = ({ hideBackground = false}) => {
  const styleColor = hideBackground ? {backgroundImage: 'none'} : {};
  
  return (
    <div 
      className={s.cover}
      style={styleColor}
    >
      <div className={s.wrap}>
        <Header>
          Учите слова онлайн
        </Header>
        <Paragraph
          prgClass={{ prgHeader: true }}
        >
          Используйте карточки для заполнения и пополняйте активный словарный запас
        </Paragraph>
        <BtnCustom>
          <Link to="/cardholder/">Начните прямо сейчас!</Link>
        </BtnCustom>
      </div>
    </div>
  );
};

export default HeaderBlock;
