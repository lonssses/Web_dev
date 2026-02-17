import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  @for(user of users; track user.id){
  <p>{{ user.name }}</p>
  }
  `,
})
export class App {
  /*operatingSystem = [{id: 'win', name: 'Windows'}, {id: 'osx', name:'MacOS'}, {id: 'linux', name: 'Linux'},
  */
  users=[
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
  ];
}
