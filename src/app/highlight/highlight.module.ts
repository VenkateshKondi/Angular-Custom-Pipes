import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighLightDirective } from './high-light.directive';

@NgModule({
  declarations: [HighLightDirective],
  imports: [
    CommonModule
  ],
  exports:[HighLightDirective]
})
export class HighlightModule { }
