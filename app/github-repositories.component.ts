import { Component }        from '@angular/core';
import { Http }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import {plainToClass} from "class-transformer";
import {RepositoryResult} from "./model/RepositoryResult";

@Component({
  selector: 'github-repositories',
  template: `
    <h1>class-transformer demo</h1>
    <p><i>Type to search a github repository:</i></p>

    <input #term (keyup)="search(term.value)"/>

    <ul *ngIf="repositoryResult">
      <li *ngFor="let url of repositoryResult.repositoryUrls">{{url}}</li>
    </ul>
  `
})
export class GithubRepositoriesComponent {
  repositoryResult: RepositoryResult;

  constructor (private http: Http) {
  }

  search(term: string) {
    this.http
        .get("https://api.github.com/search/repositories?q=" + term)
        .map(response => {
            const repositoryResult = plainToClass(RepositoryResult, response.json() as Object);
            console.log("loaded and transformed repositories: ", repositoryResult);
            console.log("you can use class methods: ", repositoryResult.repositoryUrls);
            return repositoryResult;
        })
        .subscribe(repositoryResult => {
            this.repositoryResult = repositoryResult;
        });
  }
  
}