import React, { Component } from 'react';
import HeaderBlock from '../HeaderBlock';
import FooterBlock from '../FooterBlock';
import CardHolder from '../CardHolder';
import {wordsList} from '../wordsList';
import Copyright from '../Copyright'
import NavBlock from '../NavBlock/NavBlock';
import ErrorMessage from '../errorMessage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import SendNotification from '../service';

import './App.scss';

export default class App extends Component {
  noteService = new SendNotification();

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      error: false,
      errorMessage: null,
    }

    this.addCard = this.addCard.bind(this);
    this.onChangeCard = this.onChangeCard.bind(this);
    this.onDelCard = this.onDelCard.bind(this);
  }

  componentDidCatch(error) {
    this.setState(({error, errorMessage}) => ({
        error: true,
        errorMessage: error.message
    }));
}

  onSetState(newCards) {
    this.setState(({ cards }) => ({ cards: newCards }),
      () => this.saveToLocalStorage(this.state.cards));
  }

  onChangeCard(card) {
    const oldCards = this.state.cards;
    const newCards = oldCards.map(
      item => item.id === card.id ? card : item
      );

    this.onSetState(newCards);
  }

  addCard(card) {
    const oldCards = this.state.cards;
    const newCards = [...oldCards, card];

    this.onSetState(newCards);
    this.noteService.send('Добавление карточки', {
      body: 'Карточка добавлена успешно!',
      dir: 'auto',
    });
  }

  onDelCard(id) {
    const oldCards = this.state.cards;
    const newCards = oldCards.filter(card => card.id !== id);
    
    this.onSetState(newCards);
    this.noteService.send('Удаление карточки', {
      body: 'Карточка удалена успешно!',
      dir: 'auto',
    });
  }

  saveToLocalStorage(cards) {
    try {
      localStorage.setItem('wordsList', JSON.stringify(cards));
    } catch (e) {
        alert('Ошибка записи, последние изменения не сохранились! ', e.message);
    }
  }

  readFromLocalStorage() {
    const cards = JSON.parse(localStorage.getItem('wordsList')) || [];
    return  cards.length !== 0 ? cards : wordsList;
  }

  addData(cards) {
    cards.forEach((card, index) => {
      if (card.id === undefined) {
        card.id = Date.now() + Math.random(0.5) + index;
      }
      if (card.fixDone === undefined) {
        card.fixDone = false;
      }
    });
    return cards;
  }

  shouldComponentUpdate (nextProps, nextState) { 
    return (this.state.cards.length !== nextState.cards.length) 
  }

  componentDidMount() {
    const cards = this.addData(this.readFromLocalStorage());

    this.setState({cards});
  }

  render() {
    const {cards, error, errorMessage} = this.state;

    if (error) {
      return (
        <ErrorMessage message={errorMessage}/>
      )
    }

    return (
      <Router>
        <NavBlock />
        <Switch>
        <Route path="/" exact> 
          <HeaderBlock /> 
        </Route> 
        <Route path="/cardholder" exact>
          <CardHolder
            wordsList={cards}
            onChangeCard = {this.onChangeCard}
            onDelCard = {this.onDelCard}
            onFixDoneCard = {this.onChangeCard}
          />
        </Route>
        <Route path="/footerblock" exact>
          <FooterBlock
            onAddCard = {this.addCard}
          />
        </Route>
        <Route component={HeaderBlock} />
        </Switch>
        
        <Copyright />
      </Router>
    );
  }
};



