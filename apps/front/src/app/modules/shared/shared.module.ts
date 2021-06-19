import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponent, LogoutComponent],
  exports: [LogoutComponent]
})
export class SharedModule { }
