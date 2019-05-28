import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';

export default class Palette extends Component{
  InstaService = new InstaService();
  state = {
    photos: [],
    error: false
  };

  componentDidMount() {
    //функция для обновления фотографий
    this.updatePhotos();
  }

  updatePhotos() {
    //получение фотографий
    this.InstaService.getAllPhotos()
    //если всё хорошо, возвращает фотографии
    .then(this.onPhotosLoaded)
    //если что-то не так, получаем ошибку
    .catch(this.onError)
  }

  //функция получает фотографии
  onPhotosLoaded = (photos) => {
    this.setState({
      photos,
      error: false
    })
  };

  //если есть ошибка, возвращает её в true
  onError = (err) => {
    this.setState({
      error: true
    })
  };

  //формирование постов автоматически из БД
  renderItems(arr) {
    //колбэк функция которая будет запускаться на каждом отдельном элементе массива
    return arr.map(item => {
      const { src, alt, id } = item;
      //деструктуризация, вытащили отдельные переменные из объекта
      return (
      <img src={src} alt={alt} key={id}>

      </img>
      )
    })
  }

  render() {
    const { error, photos } = this.state;
    //получение состояния ошибки и фотографий
    if (error) {
      return <ErrorMessage />
    }

    const items = this.renderItems(photos);

    return (
    <div className="palette">
      {items}
    </div>
    );
  }

}