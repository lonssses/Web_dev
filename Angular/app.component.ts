import {Component, input} from '@angular/core';
@Component({
    selector: 'app-user',
    template: '<p>The user's name is, The user's occupation is {{occupation()}}</p>
    <app-user occupation="Angular Development"></app-user>
    ',

})
export class User{
    occupation =input<string>();
}
export class App{

}