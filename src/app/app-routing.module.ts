import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';

import { ItemFormComponent } from './item-form/item-form.component';

const routes: Routes = [
  { path: 'post-create-path', component: PostCreateComponent  },
  { path: 'post-list-path', component: PostListComponent },
  { path: 'item-form-component', component: ItemFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PostCreateComponent, PostListComponent, ItemFormComponent];
