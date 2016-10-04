import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// routing
import { AppRoutingModule } from './app-routing.module';
// import { AppRoutingModule, routedComponents } from './app-routing.module';

// material design 2
import { MaterialModule } from '@angular/material';

// services
import { HttpDemoService } from './http-demo/http-demo.service'

// components
import { AppComponent } from './app.component';
import { MaterialDesignComponent } from './material-design/material-design.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialDesignComponent,
    DashboardComponent,
    HttpDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [HttpDemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
