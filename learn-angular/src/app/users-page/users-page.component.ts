import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent, User } from '../user-card/user-card.component';
import { ShareBarComponent } from '../share-bar/share-bar.component';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [CommonModule, UserCardComponent, ShareBarComponent],
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent {

  showOnlyActive = false;

  users: User[] = [
    { id: 1, name: 'Sarah', role: 'Student', active: true },
    { id: 2, name: 'Amy', role: 'Student', active: false },
    { id: 3, name: 'John', role: 'Teacher', active: true },
  ];

  toggleFilter() {
    this.showOnlyActive = !this.showOnlyActive;
  }

  removeUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
  }

  get filteredUsers() {
    return this.showOnlyActive
      ? this.users.filter(u => u.active)
      : this.users;
  }
}