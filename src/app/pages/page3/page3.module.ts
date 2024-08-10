import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Page3PageRoutingModule } from './page3-routing.module';

import { Page3Page } from './page3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page3PageRoutingModule,
    ReactiveFormsModule,
    NgbAlertModule,
    NgbDatepickerModule
  ],
  declarations: [Page3Page]
})
export class Page3PageModule {}
