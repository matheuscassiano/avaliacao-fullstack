import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuardService } from './services/auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponent, LogoutComponent],
  exports: [LogoutComponent],
  providers: [AuthGuardService]
})
export class SharedModule { }
