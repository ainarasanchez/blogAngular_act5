import { Component } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
    newPost: IPost = { id: 0, title: '', url: '', author: '', date: '', body: '' };

    guardarPost() {
      if(this.newPost.title !== "" && this.newPost.author !== "" && this.newPost.date !== "" && this.newPost.body !== "" && this.newPost.url !== "") {
        // puedo insertar el elemento en el array
        //this.newPost.id = this.id;
        //this.arrPosts.push(this.newPost);
        //this.id++;
        this.newPost = { id: 0, title: '', url: '', author: '', date: '', body: '' };
      } else {
        alert('Todos los campos son obligatorios');
      }
    }

}
