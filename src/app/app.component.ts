import { Component } from '@angular/core';
<<<<<<< Updated upstream
import { Post } from './posts/post.model';
=======
import { ItemData } from './components/items/item.model';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tech-support-project';
<<<<<<< Updated upstream
  storedPosts: Post[] = [];
=======
  storedItems: ItemData[] = [];
>>>>>>> Stashed changes

  onPostAdded(post) {
    this.storedPosts.push(post);
  }
}


