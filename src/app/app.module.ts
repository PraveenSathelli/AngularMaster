import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './shared/card/card.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import {BrowserModule} from '@angular/platform-browser'

@NgModule({
  declarations: [AppComponent,HeaderComponent,TasksComponent,UserComponent, CardComponent,TaskComponent,NewTaskComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DatePipe
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
