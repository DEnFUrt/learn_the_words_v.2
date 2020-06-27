import React from 'react';
import BtnCard from '../BtnCard';

import s from './BtnBlock.module.scss';

const BtnBlock = (props) => {
  const {onDelCard, onFixDoneCard, fixedCard} = props;

  return (
    <div
    className={s.btnBlock} 
    >
      <BtnCard
        key="btnFixCard"
        btnClass={{btnFixCard: true}}
        btnEvent={onFixDoneCard}
        btnType="button"
        btnTitle="✔"
        fixedCard={fixedCard}
      />
      <BtnCard
        key="btnDelCard"
        btnClass={{btnDelCard: true}}
        btnEvent={onDelCard}
        btnType="button"
        btnTitle= "✖"
      />
    </div>
  )
}

export default BtnBlock;