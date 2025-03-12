import { Component, inject } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { PostsService } from '../../services/posts.service';
import { PostCardComponent } from "../post-card/post-card.component";

@Component({
  selector: 'app-post-list',
  imports: [PostCardComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  arrPosts: IPost[] = [];

  // le pedimos al servicio que nos de los datos del post
  postService = inject(PostsService);

  ngOnInit() {
    this.arrPosts = this.postService.getAll();
  }

}
