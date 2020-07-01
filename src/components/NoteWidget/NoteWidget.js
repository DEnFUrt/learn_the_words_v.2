import React, {Component} from 'react';

import s from './NoteWidget.module.scss';

export default class NoteWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: false,
      message: null,
    }

    this.onToggleHide = this.onToggleHide.bind(this);
  }

  onToggleShow(propsMess) {
    this.setState({
        isShow: true,
        message: propsMess
      })
  }

  onToggleHide() {
    this.setState(
      state => state.isShow ? {isShow : false} : null
    )
  }

  render() {
    const {isShow, message} = this.state;

    return (
      isShow && 
        <div 
          className={s.noteWidget}
          onClick={this.onToggleHide}
        >
          <span>{message}</span>
        </div>
    )
  } 
};
