import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuardService } from './services/auth.guard';

import { FeatherModule } from 'angular-feather';
import icons from './icon.provider';

@NgModule({
  imports: [CommonModule, FeatherModule.pick(icons)],
  declarations: [SharedComponent, LogoutComponent],
  exports: [LogoutComponent, FeatherModule],
  providers: [AuthGuardService],
})
export class SharedModule {}
