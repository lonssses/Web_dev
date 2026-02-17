import {Component} from '@angular/core';
import {Componemt} from './comments';
@Component({
    selector: 'app-user', 
    template: '
    <div>
        <h1>How I feel about Angular</h1>
        <article></article>
        <comments/>
</div>
    ',
    imports: [Comments],

})
export class App{
    @defer{
    <comments />
}@placeholder{
    <p>Future comments</p>
}@loading{
    <p>Loading comments...</p>
}@defer(on viewport){
    <comment />
}
}
