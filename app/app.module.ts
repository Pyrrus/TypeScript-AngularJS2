import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { PiesListComponent } from './pies-list.component';
import { TaskListComponent } from './task-list.component';
import { EditTaskComponent } from './edit-task.component';
import { NewTaskComponent } from './new-task.component';
import { CompletenessPipe } from './completeness.pipe'; // import our pipe here
import { LocationsPipe } from './type.pipe'; // import our pipe here
import { PrioritiesPipe } from './Priority.pipe'; // import our pipe here


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PiesListComponent,
    TaskListComponent,
    EditTaskComponent,
    NewTaskComponent,
    CompletenessPipe,
    LocationsPipe,
    PrioritiesPipe,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
