import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { categories } from '../../@shared/data-models/categories.model';
import { ItemsMockService } from '../../app-services/mock-backend/item-mock.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent {

  msg = '';
  url;
  cates = categories;

  constructor(public itemsService: ItemsMockService) { }

  selectFile(event) {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
      this.msg = 'You must select an image';
      return;
    }

    const mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = 'Only images are supported';
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = '';
      this.url = reader.result;
    };
  }

  onAddItem(form: NgForm) {
    if (form.invalid) { return; }
    this.itemsService.addItem(form.value.cate, form.value.title, form.value.content, this.url, form.value.dayprice);
    form.resetForm();
  }
}
