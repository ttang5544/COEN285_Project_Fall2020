import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { mockData } from './posts.mock-data';

@Injectable({ providedIn: 'root' })

export class PostsService {
  private posts: Post[] = [];


  constructor() {
    this.posts = [...mockData]; // use mock data
  }

  getPosts() {
    return this.posts;
  }

  addPost(title: string, content: string, imgurl: string, cate: string) {
    const post: Post = {
      title,
      content,
      imgurl,
      cate
    };
    this.posts.push(post);

  }
}
