import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import {CommonModule} from '@angular/common';
import {NavbarreComponent} from './navbarre/navbarre.component';
import {CoreServicesModule} from './services/core-services.module';
import {ToastComponent} from './toast/toast.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {MaterialModule} from '../material-app.module';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material';
import {InterceptorsModule} from './interceptors/interceptors.module';
import {ModalModule} from '../ui-component/modal/modal.module';



@NgModule({
  declarations: [
    NavbarreComponent,
    ErrorPageComponent,
    ToastComponent,
  ],
  entryComponents: [ToastComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    CoreServicesModule,
    MaterialModule,
    InterceptorsModule,
  ],
  exports: [
    NavbarreComponent,
    ToastComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [{
    provide: MAT_SNACK_BAR_DATA,
    useValue: {}
  }]
})

export class CoreModule { }
