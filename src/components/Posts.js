import React, { Component } from 'react';
import InstaService from '../services/instaservice';
import User from "./User";
import ErrorMessage from './ErrorMessage'

export default class Posts extends Component {
    //Class fields ES10
    InstaService = new InstaService();
    //Состояние компонента
    state = {
        //отслеживаем посты
        posts: [],
        //отслеживаем ошибки
        error: false
    };

    componentDidMount() {
        //функция для обновления постов
        this.updatePosts();
    }

    updatePosts() {
        //получение постов
        this.InstaService.getAllPosts()
        //если всё хорошо, возвращает посты
            .then(this.onPostsLoaded)
            //если что-то не так, получаем ошибку
            .catch(this.onError)
    }

    //функция получает посты
    onPostsLoaded = (posts) => {
        this.setState({
            posts,
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
            //деструктуризация, вытащили отдельные переменные из объекта
            const { name, altname, photo, src, alt, descr, id } = item;

            return (
                <div key={id} className="post">
                    <User
                        src={photo}
                        alt={altname}
                        name={name}
                        min />
                    <img src={src} alt={alt}>

                    </img>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr}
                    </div>
                </div>
            )
        })
    }

    render () {
        const { error, posts } = this.state;
        //получение состояния ошибки и постов
        if (error) {
            return <ErrorMessage />
        }

        const items = this.renderItems(posts);

        return (
          <div className="left">
              {items}
          </div>
        );
    }
}