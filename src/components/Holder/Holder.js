import React from 'react';

import s from './Holder.module.scss';

const Holder = (props) => {
  const {title} = props;
    
  return (
    <section
      className={s.container}
    >
      <h1
        className={s.title}
      >
        {title}
      </h1>
    </section>
  )
}

export default Holder;
