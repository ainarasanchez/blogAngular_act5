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
        url: 'https://example.com/primera-publicacion',
        author: 'Autor Uno',
        date: '2025-03-12',
        body: 'Este es el contenido de la primera publicación.'
    },
    {
        id: 2,
        title: 'Segunda Publicación',
        url: 'https://example.com/segunda-publicacion',
        author: 'Autor Dos',
        date: '2025-03-11',
        body: 'Este es el contenido de la segunda publicación.'
    },
    {
        id: 3,
        title: 'Tercera Publicación',
        url: 'https://example.com/tercera-publicacion',
        author: 'Autor Tres',
        date: '2025-03-10',
        body: 'Este es el contenido de la tercera publicación.'
    }
  ];

}
