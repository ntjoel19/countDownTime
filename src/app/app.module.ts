import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './component/signup/signup.component';
import { ActivateAccountComponent } from './component/activate-account/activate-account.component';
import { FormsModule } from '@angular/forms';
import { AddZerosPipe } from './customPipe/add-zeros.pipe';
import { SetToZeroPipe } from './customPipe/set-to-zero.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ActivateAccountComponent,
    AddZerosPipe,
    SetToZeroPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
