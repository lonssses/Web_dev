import {Component} from '@angular/core';
@Component({
    selector: 'app-child',
    styles: '
    .btn{
        padding: 5px;
    }
    '
    class Child{
        incrementCountEvent = output<number>();
        onClick(){
            this.count++;
            this.incrementCountEvent.emit(this.count);
        }
        addItem{
            thid.addItemEvent.emit('turtule');
        }
        <app-child (addItemEvent) = "addItem($event)"/>
    }
})