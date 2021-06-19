import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { usersRoutes } from './users-routing.module';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [UsersComponent, ListComponent],
})
export class UsersModule {}
