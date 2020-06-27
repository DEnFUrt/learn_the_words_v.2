import React from 'react';
import cl from 'classnames';

import s from './BtnCard.module.scss';

const BtnCard = (props) => {
  const {btnClass, btnEvent, btnType, btnTitle, fixedCard = false} = props;
  
  const btnClassName = cl(
    s.btn,
    {
      [s.btnDelCard]: btnClass.btnDelCard,
      [s.btnFixCard]: btnClass.btnFixCard
    }
  );

  const styleVisibility = fixedCard ? {visibility: 'hidden'} : {visibility: 'visible'};

  return (
    <button
      className={btnClassName}
      type={btnType} 
      onClick = {btnEvent}
      style={styleVisibility}
    >
      <span>{btnTitle}</span>
    </button>
  )
}

export default BtnCard;