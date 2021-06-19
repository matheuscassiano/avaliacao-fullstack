import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { usersRoutes } from './users-routing.module';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(usersRoutes)],
  declarations: [UsersComponent, ListComponent],
})
export class UsersModule {}
