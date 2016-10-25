import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDarkTheme = false;
  
  views: Object[] = [
    {
      name: "Appointments",
      description: "Review upcoming bookings",
      icon: "assignment ind",
      route: "/md"
    },
    {
      name: "Clients",
      description: "Search for clients",
      icon: "pets",
      route: "/client-view"
    },
    {
      name: "Items",
      description: "Search for items",
      icon: "pets",
      route: "/item-view"
    },
    {
      name: "ItemBatches",
      description: "Search for item batches",
      icon: "pets",
      route: "/item-batch-view"
    }    
  ];

  showSettings() {
    alert("Settings");
  }
}
