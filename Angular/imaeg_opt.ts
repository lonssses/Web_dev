import {NgOptimizedImage} from '@angular/common';
@Component({
    selector: 'app-user',
    template: `
    <p>Username:{{username}}</p>
    <p>Preferred Framework:</p>
    <ul>
    <li>
        Static Image:
        <img src = "/logo.svg" alt="Angular logo" />

    </li>
    <li>
        Dynamic Image: <img [src]="logoUrl"
[alt]="logAlt" />
</li>
    </ul>
    
    `,
    imports: [],
    
})
export class User{
    logoUrl = '/logo.svg';
    logoAlt = 'Angular logo';
    username = 'youngTech';
}