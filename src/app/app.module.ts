import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { QueueNewComponent } from './views/queue-new/queue-new.component';

@NgModule({
  declarations: [
    AppComponent,
    QueueNewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
