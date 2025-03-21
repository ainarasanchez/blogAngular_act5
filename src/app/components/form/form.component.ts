import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { NgxSonnerToaster, toast } from 'ngx-sonner';

@Component({
  selector: 'app-form',
  imports: [FormsModule, NgxSonnerToaster],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
    postsService = inject(PostsService);
    guardarPost(form: any) {
      if(form.value.title !== "" && form.value.author !== "" && form.value.date !== "" && form.value.body !== "" && form.value.url !== "")  {
        let response = this.postsService.insert(form.value);
        toast.success(response);
        form.reset();
      }else {
        toast.error('Todos los campos son obligatorios');
      }
    }

    /*guardarPost() {
      if(this.newPost.title !== "" && this.newPost.author !== "" && this.newPost.date !== "" && this.newPost.body !== "" && this.newPost.url !== "") {
        //puedo insertar el elemento en el array
        //this.newPost.id = this.id;
        //this.arrPosts.push(this.newPost);
        //this.id++;

        //llevar el newPost al servicio, para ello tenemos que inyectar el servicio dentro de este componente. 
        let response = this.postsService.insert(this.newPost);
        alert(response);

        this.newPost = { id: 0, title: '', url: '', author: '', date: '', body: '' };
      } else {
        alert('Todos los campos son obligatorios');
      }
    }*/

}
