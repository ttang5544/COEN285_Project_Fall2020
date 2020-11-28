import { Post } from './post.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class PostsService{
  private posts: Post[] = [];

  getPosts() {
    return this.posts;
  }

  addPost(title: string, content: string, url: string, cate: string) {
    const post: Post = {title: title, content: content, imgurl: url, cate:cate};
    this.posts.push(post);

  }
}
