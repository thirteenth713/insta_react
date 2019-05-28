export default class InstaService {
    constructor() {
        this._apiBase = 'http://localhost:3000/'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)   //Нет ответа от сервера
        }

        return res.json();
    };

    getAllPosts = async () => {
        const res = await this.getResource('posts/');
        return res;
    };

    getAllPhotos = async () => {
        const res = await this.getResource('posts/');
        return res.map(this._transformPosts);
    };

    //метод трансформации(обрабработки данных), получаем только нужные данные от БД
    _transformPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt,
            id: post.id
        }
    }
}