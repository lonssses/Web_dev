import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export type User = {
  id: number;
  name: string;
  role: string;
  active: boolean;
};

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {

  @Input() user!: User;

  @Output() remove = new EventEmitter<number>();

  delete() {
    this.remove.emit(this.user.id);
  }
}