import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: IPost[] = [
    {
        id: 1,
        title: 'Primera Publicación',
        url: 'https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/travel/crete-travel/creta_m.jpg.image.694.390.low.jpg',
        author: 'Autor Uno',
        date: '2025-03-12',
        body: 'Este es el contenido de la <strong>primera publicación.<strong/>'
    },
    {
        id: 2,
        title: 'Segunda Publicación',
        url: 'https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/travel/crete-travel/creta_m.jpg.image.694.390.low.jpg',
        author: 'Autor Dos',
        date: '2025-03-11',
        body: 'Este es el contenido de la segunda publicación.'
    },
    {
        id: 3,
        title: 'Tercera Publicación',
        url: 'https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/travel/crete-travel/creta_m.jpg.image.694.390.low.jpg',
        author: 'Autor Tres',
        date: '2025-03-10',
        body: 'Este es el contenido de la tercera publicación.'
    }
  ];

  id: number = 4;

  getAll(): IPost[] {
    return this.arrPosts;
  }

  insert(newPost: IPost) : any {
    newPost.id = this.id;
    this.arrPosts.push(newPost);
    this.id++;
    return "Publicación insertada correctamente";
  }
}
