import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../@shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { OwnerInventory } from './items/inventory/owner-inventory.component';
import { ItemCreateComponent } from './items/item-create/item-create.component';
import { DialogOverviewExampleDialog } from './items/item-list/dialog-overview-example/dialog-overview-example-dialog';
import { ItemListComponent } from './items/item-list/item-list.component';
import { MessagepageComponent } from './messagepage/messagepage.component';




const routeComponents = [
  HeaderComponent,
  DashboardComponent,
  OwnerInventory,
  ItemListComponent,
  ItemCreateComponent,
  DialogOverviewExampleDialog,
  MessagepageComponent,
];


@NgModule({
  declarations: [
    ...routeComponents
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    ...routeComponents
  ]
})
export class ToolTimeModule { }
