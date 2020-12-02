import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HeaderComponent, LoginComponent],
  imports: [
    CommonModule, FormsModule, IconsModule, RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
export { HeaderComponent };
