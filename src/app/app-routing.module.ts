import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QueueNewComponent } from './views/queue-new/queue-new.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'create', component: QueueNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }