import React from 'react';
import Footer from '../Footer';

import s from './FooterBlock.module.scss';

const HeaderBlock = ({ hideBackground = false, children }) => {
  const styleColor = hideBackground ? {backgroundImage: 'none'} : {};
  
  return (
    <div className={s.cover} style={styleColor}>
      <div className={s.wrap}>
        <Footer/>
        {children}
      </div>
    </div>
  );
};

export default HeaderBlock;
