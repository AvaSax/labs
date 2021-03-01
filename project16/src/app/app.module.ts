import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkerlistComponent } from './ui/workerlist/workerlist.component';
import { WorkeraddComponent } from './ui/workeradd/workeradd.component';
import { PipePipe } from './shared/pipes/pipe.pipe';
import { MainPageComponent } from './ui/main-page/mainpage.component';
import { SortbyPipe } from './shared/pipes/sortby.pipe';
import { WorkersComponent } from './ui/workers/workers.component';
import { HeaderComponent } from './ui/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkerlistComponent,
    WorkeraddComponent,
    PipePipe,
    MainPageComponent,
    SortbyPipe,
    WorkersComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, TextMaskModule, HttpClientModule, AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
