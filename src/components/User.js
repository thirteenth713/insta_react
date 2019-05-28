import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return (
      //  Проверка на наличие props.min, если он есть - выводить маленький блок, если нет - стандартный блок.
      <a href="#" className={this.props.min ? "user min" : "user"} >
        <img src={this.props.src} alt={this.props.alt}>

        </img>
        <div>{this.props.name}</div>
      </a>
    );
  }
}