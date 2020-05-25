import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[node-host]',
})
export class NodeDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}