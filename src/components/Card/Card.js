import React, { Component } from 'react';
import BtnBlock from '../BtnBlock';
import cl from 'classnames';

import s from './Card.module.scss';

export default class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
      card: {},
      fixedCard: false, 
		}

    this.onToggleCard = this.onToggleCard.bind(this);
    this.onFixDoneCard = this.onFixDoneCard.bind(this);
	}

  onFixDoneCard() {
    const oldCard = this.state.card;
    const newCard = {...oldCard, done: false, fixDone: true};

    this.setState({
      card: newCard, 
      fixedCard: true,
    },
      () => this.props.onFixDoneCard(this.state.card));
  }

  onToggleCard() {
    const oldCard = this.state.card;
    const newCard = oldCard.fixDone ? {...oldCard, done: false} : {...oldCard, done: !oldCard.done};

    this.setState({card: newCard},
      () => this.props.onChangeCard(this.state.card));
  }

	componentDidMount() {
    const prevCard = this.props.card;
    const prevFixedCard = prevCard.fixDone;

    this.setState({
      card: prevCard,
      fixedCard: prevFixedCard,
    });
  }

  render() {
    const {eng, rus, done, id, fixDone} = this.state.card;
    const {fixedCard} = this.state;
    const {onDelCard} = this.props;
    const cardClass = cl(
      s.card,
      {
        [s.done]: done,
        [s.fixDone]: fixDone
      }
    );

    return (
      <div 
        className={cardClass}
      >
        <BtnBlock 
          onDelCard={() => onDelCard(id)}
          onFixDoneCard={this.onFixDoneCard}
          fixedCard={fixedCard}
        />
        <div 
          className={s.cardInner}
          onClick={!fixedCard ? this.onToggleCard : null}
          >
          <div className={s.cardFront}>
            <span>{ eng }</span>
          </div>
  	      <div className={s.cardBack}>
            <span>{ rus }</span>
          </div>
        </div>
      </div>
    );
  }
}
