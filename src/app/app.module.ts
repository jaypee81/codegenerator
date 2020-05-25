import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubComponent } from './hub/hub.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertiesComponent } from './properties/properties.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NodeComponent } from './node/node.component';
import { NodeDirective } from './hub/node.directive';
import { PropDirective } from './hub/prop.directive';
import { MatCardModule } from '@angular/material/card';
import { PropertyService } from './services/property.service';
 
@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    PropertiesComponent,
    NodeComponent,
    NodeDirective,
    PropDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    DragDropModule
  ],
  providers: [PropertyService,HubComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
