import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[prop-host]',
})
export class PropDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}