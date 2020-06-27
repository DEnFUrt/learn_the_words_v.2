import React from 'react';
import Card from '../Card';
import BtnCustom from '../BtnCustom'
import {Link} from 'react-router-dom';

import s from './CardHolder.module.scss';

const CardHolder = (props) => {
  const {wordsList, ...cardProps} = props;
  let cards = [];

  if (wordsList.length > 0) {
    cards = wordsList.map(item => <Card key={item.id} card={item} {...cardProps} />)
  } else {
    cards = (
      <h1
        style={ {color: 'white', fontSize: '2.5rem', textAlign: 'center'} }
      >☹ Упс... Карточек больше нет...</h1>
    );
  }

  return (
    <section
      className={s.container}
    >
      <div
        className={s.containerCards}
      >
        {cards}
      </div>
      <div
        className={s.containerBtn}
      >
        <BtnCustom>
          <Link to="/footerblock/">Кончились карточки? Добавляй!</Link>
        </BtnCustom>
      </div>
    </section>
  )
}

export default CardHolder;
