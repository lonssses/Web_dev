import {Component} from '@angular/core';
@Component({
    selector: 'app-root',
    template: '
    <section (mouseover)="showSecretMessage()">
        <button (click)="greet()"> Click me</button>
        <p>{{message}}</p>
</section>
    '
})
export class AppComponent{
    message='';
    greet(){
        console.log('Hello, there');
    }
    showSecretMessage(){
        this.message = 'Way to go plane';
    }
}