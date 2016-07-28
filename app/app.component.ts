import { Component } from '@angular/core';
import './rxjs-operators';

import { GithubRepositoriesComponent } from './github-repositories.component';

@Component({
  selector: 'my-app',
  template: `
    <github-repositories></github-repositories>
  `,
  directives: [
    GithubRepositoriesComponent
  ]
})
export class AppComponent { 
  
}