import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import * as localeDe from "@angular/common/locales/de";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NgxSpinnerModule } from "ngx-spinner";
import { ModalModule } from "ngx-modal";
import { RatingModule } from "ngx-rating";
import { AdministrationModule } from "./administration/administration.module";
import { PlatformModule } from "./platform/platform.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SlickCarouselModule } from "ngx-slick-carousel";

import { NO_ERRORS_SCHEMA } from "@angular/core"; 
// ********************** angular-modal-gallery *****************************
//import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
//import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
//import { ModalGalleryModule } from 'angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// **************************************************************************

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministrationModule,
    PlatformModule,
    NgxSpinnerModule,
    ModalModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlickCarouselModule,
    //ModalGalleryModule.forRoot() // <-------------------------------------------- angular-modal-gallery module import
  ],
  providers: [],
  schemas:[NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
