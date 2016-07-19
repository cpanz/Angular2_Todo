import { Component } from '@angular/core';
import { TodoAppComponent } from './todo/index';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [TodoAppComponent],
})
export class AppComponent { }