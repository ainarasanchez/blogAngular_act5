import { Component } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  arrPosts: IPost[] = [
    {
        id: 1,
        title: 'Primera Publicación',
        url: 'https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/travel/crete-travel/creta_m.jpg.image.694.390.low.jpg',
        author: 'Autor Uno',
        date: '2025-03-12',
        body: 'Este es el contenido de la primera publicación.'
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

  ngOnInit() {
    this.getData();

    }

  getData(): string {
      let html = '';
      this.arrPosts.forEach( post => {
        html += `<article>
            <figure>
                <img src="${post.url}" alt="${post.title}">
            </figure>
            <h3>${post.title}</h3>
            <p>Autor: ${post.author}</p>
            <p>Fecha: ${post.date}</p>
            <div class="content">
                <p>${post.body}</p>
            </div>   
        </article>`
      })
      return html;
  }
  }