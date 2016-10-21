import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// routing
import { AppRoutingModule } from './app-routing.module';
// import { AppRoutingModule, routedComponents } from './app-routing.module';

// material design 2
import { MaterialModule } from '@angular/material';

// import bootstrap
//import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

// services
import { BlueSkyApiService } from './services/bluesky-api.service'
import { HttpDemoService } from './http-demo/http-demo.service'
import { ClientViewService } from './client-view/client-view.service'
import { ItemViewService } from './item-view/item-view.service'
import { ItemBatchViewService } from './item-batch-view/item-batch-view.service'

// components
import { AppComponent } from './app.component';
import { MaterialDesignComponent } from './material-design/material-design.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemBatchViewComponent } from './item-batch-view/item-batch-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialDesignComponent,
    DashboardComponent,
    HttpDemoComponent,
    ClientViewComponent,
    ItemViewComponent,
    ItemBatchViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [
    BlueSkyApiService,
    HttpDemoService, 
    ClientViewService,
    ItemViewService,
    ItemBatchViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
