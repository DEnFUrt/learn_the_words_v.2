import React from 'react';
import {Link} from 'react-router-dom';

import s from './NavBlock.module.scss';

const NavBlock = () => {
  return (
    <div className={s.container}>
      <h3>
        <Link to="/">
          Learn the words
        </Link>
      </h3>
      <ul  className={s.navLinks}>
        <li><Link to="/cardholder/">Учить</Link></li>
        <li><Link to="/footerblock/">Добавлять</Link></li>
      </ul>
    </div>
  )
}

export default NavBlock;