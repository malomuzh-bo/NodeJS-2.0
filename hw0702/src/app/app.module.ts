import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PicItemComponent } from './pic-item/pic-item.component';
import { PicService } from './pic.service';

@NgModule({
  declarations: [
    AppComponent,
    PicItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
