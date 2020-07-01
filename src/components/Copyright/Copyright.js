import React from 'react';

import s from './Copyright.module.scss';

const Copyright = ({children}) => {
  return (
    <>
      <div
        className={s.wrap}
      >
        <span>© 2020 <a href="http://furtaevdv.site/">Денис Фуртаев</a></span>
      </div>
      {children}
    </>
  );
}

export default Copyright;