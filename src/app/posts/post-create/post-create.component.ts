import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Post} from '../post.model';
import { PostsService } from '../posts.service';
import { categories } from '../categories.model';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  msg = "";
  url;
  cates = categories;

  constructor(public postsService: PostsService) {}

  selectFile(event) {
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}

		var mimeType = event.target.files[0].type;

		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}

		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;
		}
	}

  onAddPost(form: NgForm) {
    if (form.invalid) return;
    this.postsService.addPost(form.value.title, form.value.content, this.url, form.value.cate, form.value.dayprice);
    form.resetForm();
  }
}
