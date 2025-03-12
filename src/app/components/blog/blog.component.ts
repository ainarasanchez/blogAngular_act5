import { Component } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [DatePipe, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  newPost: IPost = { id: 0, title: '', url: '', author: '', date: '', body: '' };
  id: number = 1;
  arrPosts: IPost[] = [
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

  ngOnInit() {
    //this.getData();

    }
  
  guardarPost() {
    if(this.newPost.title !== "" && this.newPost.author !== "" && this.newPost.date !== "" && this.newPost.body !== "" && this.newPost.url !== "") {
      // puedo insertar el elemento en el array
      this.newPost.id = this.id;
      this.arrPosts.push(this.newPost);
      this.id++;
      this.newPost = { id: 0, title: '', url: '', author: '', date: '', body: '' };
    } else {
      alert('Todos los campos son obligatorios');
    }
  }

  // getData(): string {
  //     let html = '';
  //     this.arrPosts.forEach( post => {
  //       html += `<article>
  //           <figure>
  //               <img src="${post.url}" alt="${post.title}">
  //           </figure>
  //           <h3>${post.title}</h3>
  //           <p>Autor: ${post.author}</p>
  //           <p>Fecha: ${post.date}</p>
  //           <div class="content">
  //               <p>${post.body}</p>
  //           </div>   
  //       </article>`
  //     })
  //     return html;
  // }
  }