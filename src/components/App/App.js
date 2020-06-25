import React, { Component } from 'react';
import HeaderBlock from '../HeaderBlock';
import FooterBlock from '../FooterBlock';
import Header from '../Header';
import BtnHeader from '../BtnHeader';
import Paragraph from '../Paragraph';
import Holder from '../Holder';
import Copyright from '../Copyright'

import './App.scss';

export default class App extends Component {

  render() {
  
    return (
      <>
        <HeaderBlock>
          <Header>
            Учите слова онлайн
          </Header>
          <Paragraph>
            Используйте карточки для заполнения и пополняйте активный словарный запас
          </Paragraph>
          <BtnHeader>
            Начните прямо сейчас!
          </BtnHeader>
        </HeaderBlock>
        <Holder
          title="А здесь могла бы быть ваша реклама :)"
        />
        <FooterBlock
          hideBackground
        />
        <Copyright />
      </>
    );
    }
};

