import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatewayTimeoutComponent } from './gateway-timeout/gateway-timeout.component';



@NgModule({
  declarations: [GatewayTimeoutComponent],
  imports: [
    CommonModule
  ], 
  exports: [GatewayTimeoutComponent]
})
export class GatewayTimeoutModule { }
export {GatewayTimeoutComponent}
