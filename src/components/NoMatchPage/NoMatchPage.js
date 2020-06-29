import React from 'react';

import s from './NoMatchPage.module.scss';
import BtnCustom from '../BtnCustom';
import {Link} from 'react-router-dom';

const NoMatchPage = () => {
  return (
    <div className={s.errorPage}>
      <BtnCustom>
        <Link to="/">Back to the Future!</Link>
      </BtnCustom>
    </div>
  );
}

export default NoMatchPage;