import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { SharedModule } from '../sharedmodule/shared.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, SharedModule],
})
export class OrderModule {}
