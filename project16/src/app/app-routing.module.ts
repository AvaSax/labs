import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './ui/main-page/mainpage.component';
import { WorkersComponent } from './ui/workers/workers.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'workers',
    component: WorkersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
