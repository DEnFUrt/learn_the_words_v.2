import React from 'react';
import AddCard from '../AddCard';
import Footer from '../Footer';
import Paragraph from '../Paragraph';
import {Link} from 'react-router-dom';
import BtnCustom from '../BtnCustom';

import s from './FooterBlock.module.scss';

const FooterBlock = ({ onAddCard }) => {
  
  return (
    <div className={s.cover}>
      <div className={s.wrap}>
        <Footer/>
        <AddCard
          onAddCard={(card) => onAddCard(card)}
        />
        <Paragraph 
          prgClass={{ prgBtnFooter: true }}
        >
          <BtnCustom>
            <Link to="/cardholder/">Добавили все что хотели? Продолжайте учиться!</Link>
          </BtnCustom>
        </Paragraph>
      </div>
    </div>
  );
};

export default FooterBlock;
