import { Component, OnInit,Input,ViewChild,ComponentFactoryResolver,ComponentRef } from '@angular/core';
import { PropDirective } from '../hub/prop.directive';
import { PropertiesComponent } from '../properties/properties.component';
import { PropertyService } from '../services/property.service';
import { HubComponent } from '../hub/hub.component';

@Component({
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input() parent :any;
  tablename : string;

  fields : Array<string> = [];

  constructor(private resolver: ComponentFactoryResolver,private propertyservice : PropertyService) { }

  showProperties() {
    const factory = this.resolver.resolveComponentFactory(PropertiesComponent);
    const viewContainerRef = this.parent.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(factory);
    let instance  = componentRef.instance;
    instance.noderef= this;

   }

   ngOnInit() {
     this.tablename="Table";
   }
}
