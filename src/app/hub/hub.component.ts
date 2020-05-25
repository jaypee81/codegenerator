import {  Component,
  Directive, 
  ComponentFactoryResolver,
  ViewChild,
  OnInit
} from '@angular/core';
import TableChartIcon from '@material-ui/icons/TableChart';
import { NodeComponent } from '../node/node.component';
import { NodeDirective } from './node.directive';
import { PropDirective } from './prop.directive';
import { PropertiesComponent } from '../properties/properties.component';
@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit {

  @ViewChild(NodeDirective, {static: true}) nodeHost: NodeDirective;
  @ViewChild(PropDirective, {static: true}) propHost: PropDirective;

  constructor(private resolver: ComponentFactoryResolver) { }

  onNodeSelect()
  {
   //.log(this.nodeHost);
   // this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(NodeComponent);
    const viewContainerRef = this.nodeHost.viewContainerRef;

    //viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(factory);
    let instance  = componentRef.instance;
    instance.parent=this.propHost;

    //const componentRef = this.nodeHost.createComponent(factory);
  //  componentRef.instance.tablename = "TABLENAME";
    // componentRef.changeDetectorRef.detectChanges();
  }

  // dragStart(event: CdkDragStart) {
  //   this._pointerPosition=event.source.getFreeDragPosition();
  //   console.log(this._pointerPosition)
  // }
  
  // itemDropped(event:  CdkDragDrop<any[]>) {
    

  // }


  ngOnInit(): void {
  }

}
