import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { usersRoutes } from './users-routing.module';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(usersRoutes)],
  declarations: [UsersComponent],
})
export class UsersModule {}
